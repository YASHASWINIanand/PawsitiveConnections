import React, { useState } from 'react';
import axios from 'axios';
import '../css/Adopter.css'; // Import the CSS file for styling

function Adopter() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const adopterData = { name, email };

        axios.post('http://localhost:3001/api/adopters', adopterData)
            .then(response => {
                const adopterID = response.data.adopterID;
                alert(`Adopter information submitted successfully!\nAdopter ID: ${adopterID}\nImportant: Please remember this Adopter ID.`);
                console.log('Adopter information submitted successfully:', response.data);
                // Add any additional logic (e.g., clear form, show success message)
            })
            .catch(error => {
                console.error('Error submitting adopter information:', error);
                // Handle error (e.g., display error message)
            });
    };

    return (
        <div className="adopter-box" onClick={() => console.log("Box clicked!")}>
            <h2 className="adopter-heading">Adopter Registration</h2>
            <form onSubmit={handleSubmit} className="adopter-form">
                <div className="form-group">
                    <label className="form-label">Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default Adopter;
