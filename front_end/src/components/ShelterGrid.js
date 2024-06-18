import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ShelterGrid() {
    const [shelters, setShelters] = useState([]);

    // Function to fetch all shelters from the backend
    const fetchShelters = () => {
        Axios.get('http://localhost:3001/api/shelters')
            .then(response => {
                setShelters(response.data);
            })
            .catch(error => {
                console.error('Error fetching shelters:', error);
            });
    };

    // Fetch shelters when the component mounts
    useEffect(() => {
        fetchShelters();
    }, []);

    // Function to handle shelter deletion
    const handleDelete = (shelterID) => {
        Axios.delete(`http://localhost:3001/api/shelters/${shelterID}`)
            .then(() => {
                // Remove the deleted shelter from the state
                setShelters(prevShelters => prevShelters.filter(shelter => shelter.shelterID !== shelterID));
                console.log('Shelter deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting shelter:', error);
            });
    };

    // Function to handle shelter update
    const handleUpdate = (shelterID) => {
        // Implement shelter update logic here
    };

    return (
        <div>
            <h2>All Shelters</h2>
            <div className="shelter-grid">
                {shelters.map(shelter => (
                    <div key={shelter.shelterID} className="shelter-card">
                        <h3>Shelter ID: {shelter.shelterID}</h3>
                        <h3>Name: {shelter.name}</h3>
                        <p>Location: {shelter.location}</p>
                        <button onClick={() => handleDelete(shelter.shelterID)}>Delete</button>
                        <button onClick={() => handleUpdate(shelter.shelterID)}>Update</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShelterGrid;
