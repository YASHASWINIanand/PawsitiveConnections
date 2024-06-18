import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Pet.css'; // Import the CSS file for styling
import placeholderImage from '../css/placeholder.png'; // Import a placeholder image

function Pets() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetchPets();
    }, []);

    const fetchPets = () => {
        axios.get('http://localhost:3001/api/available-pets')
            .then(response => {
                setPets(response.data);
            })
            .catch(error => {
                console.error('Error fetching pets:', error);
            });
    };

    return (
        <div className="pets-container">
            <h2 className="pets-heading">Available Pets</h2>
            <div className="pet-grid">
                {pets.map(pet => (
                    <div key={pet.petID} className="pet-card">
                        <img src={placeholderImage} alt="Pet" className="pet-image" style={{ width: '150px', height: '150px' }} />
                        <div className="pet-details">
                            <h3 className="pet-name">{pet.name}</h3>
                            <p className="pet-species">Species: {pet.species}</p>
                            <p className="pet-status">Adoption Status: {pet.adoptionStatus}</p>
                            <p className="pet-id">ID: {pet.petID}</p>
                            {/* Add more pet information here */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pets;
