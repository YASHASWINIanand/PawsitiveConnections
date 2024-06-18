import React, { useState } from 'react';
import Axios from 'axios';

function AddShelterForm() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('/api/shelters', { name, location })
            .then(() => {
                console.log('Shelter added successfully');
                // Add any additional logic (e.g., redirect, update state)
            })
            .catch((error) => {
                console.error('Error adding shelter:', error);
                // Handle error (e.g., display error message)
            });
    };

    return (
        <div>
            <h2>Add Shelter</h2>
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
