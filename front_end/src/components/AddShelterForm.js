import React, { useState } from 'react';
import Axios from 'axios';

function AddShelterForm({ onShelterAdded }) {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if both name and location fields are not empty
        if (name.trim() === '' || location.trim() === '') {
            setErrorMessage('Both name and location are required');
            return;
        }

        // If both fields have values, proceed with the insertion
        Axios.post('http://localhost:3001/api/shelters', { name, location })
            .then(() => {
                console.log('Shelter added successfully');
                // Call the callback function to update the grid with the new shelter
                onShelterAdded();
                // Clear the form fields
                setName('');
                setLocation('');
            })
            .catch((error) => {
                console.error('Error adding shelter:', error);
                // Handle error (e.g., display error message)
            });
    };

    return (
        <div>
            <h2>Add Shelter</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Location:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                <button type="submit">Add Shelter</button>
            </form>
        </div>
    );
}

export default AddShelterForm;
