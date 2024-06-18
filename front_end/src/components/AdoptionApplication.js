import React, { useState } from 'react';
import axios from 'axios';
import '../css/AdoptionApplication.css'; // Import CSS file for styling

function AdoptionApplication() {
    const [date, setDate] = useState('');
    const [petID, setPetID] = useState('');
    const [adopterID, setAdopterID] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const applicationData = { date, petID, adopterID, applicationStatus: 'Pending' }; // Include applicationStatus with default value

        axios.post('http://localhost:3001/api/adoption-applications', applicationData)
            .then(response => {
                const applicationNumber = response.data; // Assuming the application number is returned from the backend
                alert(`Adoption application submitted successfully!\nApplication Number: ${applicationNumber}\nPlease remember this number.`);
                console.log('Adoption application submitted successfully:', response.data);
                // Add any additional logic (e.g., clear form, show success message)
            })
            .catch(error => {
                console.error('Error submitting adoption application:', error);
                // Handle error (e.g., display error message)
            });
    };

    return (
        <div className="adoption-application-container">
            <h2 className="adoption-application-heading">Adoption Application</h2>
            <form onSubmit={handleSubmit} className="adoption-application-form">
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="petID">Pet ID:</label>
                    <input type="number" id="petID" value={petID} onChange={(e) => setPetID(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="adopterID">Adopter ID:</label>
                    <input type="number" id="adopterID" value={adopterID} onChange={(e) => setAdopterID(e.target.value)} />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default AdoptionApplication;
