// Import React and other necessary dependencies
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import placeholderImage from '../css/placeholder.png'; // Import placeholder image
import '../css/Grid.css'; // Import custom CSS for grid styling

function PetGrid() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetchPets();
    }, []);

    const fetchPets = () => {
        Axios.get('http://localhost:3001/api/pets')
            .then(response => {
                setPets(response.data);
            })
            .catch(error => {
                console.error('Error fetching pets:', error);
            });
    };

    // Function to handle pet deletion
    const handleDelete = (petID) => {
        Axios.delete(`http://localhost:3001/api/pets/${petID}`)
            .then(() => {
                // Remove the deleted pet from the state
                setPets(prevPets => prevPets.filter(pet => pet.petID !== petID));
                console.log('Pet deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting pet:', error);
            });
    };

    // Function to handle pet update
    const handleUpdate = (petID) => {
        // Find the pet to be updated
        const petToUpdate = pets.find(pet => pet.petID === petID);

        // Prompt the user for the updated name
        const updatedName = window.prompt('Enter the updated name:', petToUpdate.name);

        // Prompt the user for the updated species
        const updatedSpecies = window.prompt('Enter the updated species:', petToUpdate.species);

        // Prompt the user for the updated adoption status
        const updatedAdoptionStatus = window.prompt('Enter the updated adoption status:', petToUpdate.adoptionStatus);

        // Prompt the user for the updated vaccination status
        const updatedVaccination = window.prompt('Enter the updated vaccination status:', petToUpdate.vaccination);

        // Prompt the user for the updated shelter ID
        const updatedShelterID = window.prompt('Enter the updated shelter ID:', petToUpdate.shelterID);

        // Send the updated data to the backend
        Axios.put(`http://localhost:3001/api/pets/${petID}`, {
            name: updatedName,
            species: updatedSpecies,
            adoptionStatus: updatedAdoptionStatus,
            vaccination: updatedVaccination,
            shelterID: updatedShelterID
        })
        .then(() => {
            console.log('Pet updated successfully');
            // You may want to update the local state with the updated data here
            fetchPets(); // Update the pets list after successful update
        })
        .catch((error) => {
            console.error('Error updating pet:', error);
        });
    };

    return (
        <div className="pet-grid-container">
            {pets.map(pet => (
                <div key={pet.petID} className="pet-card">
                    <img
                        src={`images/${pet.species.toLowerCase()}.jpg`}
                        alt={pet.species}
                        onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop
                            e.target.src = placeholderImage; // Set placeholder image
                        }}
                    />
                    <div className="pet-details">
                        <h3>{pet.name}</h3>
                        <p>Species: {pet.species}</p>
                        <p>Adoption Status: {pet.adoptionStatus}</p>
                    </div>
                    <div className="pet-buttons">
                        <button onClick={() => handleDelete(pet.petID)}>Delete</button>
                        <button onClick={() => handleUpdate(pet.petID)}>Update</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PetGrid;
