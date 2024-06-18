import React, { useState } from 'react';
import Axios from 'axios';

function AddPetForm() {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [adoptionStatus, setAdoptionStatus] = useState('');
    const [vaccination, setVaccination] = useState('');
    const [shelterID, setShelterID] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const petData = { name, species, adoptionStatus, vaccination, shelterID };

        Axios.post('http://localhost:3001/api/pets', petData)
            .then(() => {
                setSuccessMessage('Pet added successfully'); // Set success message
                // Add any additional logic (e.g., redirect, update state)
            })
            .catch((error) => {
                console.error('Error adding pet:', error);
                // Handle error (e.g., display error message)
            });
    };

    return (
        <div>
            <h2>Add Pet</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Species:</label>
                <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} />
                <label>Adoption Status:</label>
                <input type="text" value={adoptionStatus} onChange={(e) => setAdoptionStatus(e.target.value)} />
                <label>Vaccination:</label>
                <select value={vaccination} onChange={(e) => setVaccination(e.target.value)}>
                    <option value="done">Done</option>
                    <option value="not done">Not Done</option>
                </select>
                <label>Shelter ID:</label>
                <input type="number" value={shelterID} onChange={(e) => setShelterID(e.target.value)} />
                <button type="submit">Add Pet</button>
            </form>
            {successMessage && <p>{successMessage}</p>} {/* Display success message if it exists */}
        </div>
    );
}

export default AddPetForm;
