import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AdminAdopter() {
    const [adopters, setAdopters] = useState([]);

    useEffect(() => {
        fetchAdopters();
    }, []);

    const fetchAdopters = () => {
        Axios.get('http://localhost:3001/api/adopters')
            .then(response => {
                setAdopters(response.data);
            })
            .catch(error => {
                console.error('Error fetching adopters:', error);
            });
    };

    const handleDelete = (adopterID) => {
        Axios.delete(`http://localhost:3001/api/adopters/${adopterID}`)
            .then(() => {
                setAdopters(prevAdopters => prevAdopters.filter(adopter => adopter.adopterID !== adopterID));
                console.log('Adopter deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting adopter:', error);
            });
    };

    return (
        <div>
            <h2>Admin Adopter </h2>
            <table className="adopters-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {adopters.map(adopter => (
                        <tr key={adopter.adopterID}>
                            <td>{adopter.adopterID}</td>
                            <td>{adopter.name}</td>
                            <td>{adopter.email}</td>
                            <td><button onClick={() => handleDelete(adopter.adopterID)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminAdopter;
