import React, { useState, useEffect } from 'react';
import Axios from 'axios';
//import './UserPetGrid.css'; // Import CSS file for styling

function UserPetGrid() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetchPets();
    }, []);

    const fetchPets = () => {
        Axios.get('http://localhost:3001/api/user-pets', {
            params: {
                adoptionStatus: 'not adopted'
            }
        })
            .then(response => {
                setPets(response.data);
            })
            .catch(error => {
                console.error('Error fetching pets:', error);
            });
    };

    return (
        <div className="user-pet-grid">
            {pets.map(pet => (
                <div key={pet.petID} className="user-pet-card">
                    <img src={`images/${pet.species.toLowerCase()}.jpg`} alt={pet.species} />
                    <h3>{pet.name}</h3>
                    <p>Species: {pet.species}</p>
                    <p>Adoption Status: {pet.adoptionStatus}</p>
                    <p>Vaccination: {pet.vaccination}</p>
                    <p>Shelter ID: {pet.shelterID}</p>
                </div>
            ))}
        </div>
    );
}

export default UserPetGrid;
