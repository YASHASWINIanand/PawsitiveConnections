import React, { useState } from 'react';
import axios from 'axios';

function KnowYourApplication() {
    const [applicationNumber, setApplicationNumber] = useState('');
    const [applicationDetails, setApplicationDetails] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setApplicationNumber(event.target.value);
    };

    const fetchApplicationDetails = () => {
        axios.get(`http://localhost:3001/api/adoption-application/${applicationNumber}`)
            .then(response => {
                setApplicationDetails(response.data);
                setError('');
            })
            .catch(error => {
                console.error('Error fetching application details:', error);
                setError('Error fetching application details. Please try again.');
            });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'yellow';
            case 'Rejected':
                return 'red';
            case 'Approved':
                return 'green';
            default:
                return 'black'; // Default color
        }
    };

    return (
        <div>
            <input
                type="text"
                value={applicationNumber}
                onChange={handleInputChange}
                placeholder="Enter application number"
            />
            <button onClick={fetchApplicationDetails}>Fetch Details</button>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            {applicationDetails && (
                <div>
                    <h2>Application Details</h2>
                    <p>Application Number: {applicationDetails.applicationNumber}</p>
                    <p>Application Date: {applicationDetails.application_date}</p>
                    <p>Pet ID: {applicationDetails.petID}</p>
                    <p>Pet Name: {applicationDetails.pet_name}</p>
                    <p>Species: {applicationDetails.species}</p>
                    <p>Adoption Status: <span style={{ color: getStatusColor(applicationDetails.adoptionStatus) }}>{applicationDetails.adoptionStatus}</span></p>
                    <p>Vaccination: {applicationDetails.vaccination}</p>
                    <p>Shelter Name: {applicationDetails.shelter_name}</p>
                    <p>Shelter Location: {applicationDetails.shelter_location}</p>
                    <p>Application Status: <span style={{ color: getStatusColor(applicationDetails.applicationStatus) }}>{applicationDetails.applicationStatus}</span></p>
                    <p>Adopter Name: {applicationDetails.adopter_name}</p>
                    <p>Adopter Email: {applicationDetails.adopter_email}</p>
                </div>
            )}
        </div>
    );
}

export default KnowYourApplication;
