import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AdoptionApplications() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = () => {
        Axios.get('http://localhost:3001/api/admin-adoption-applications')
            .then(response => {
                setApplications(response.data);
            })
            .catch(error => {
                console.error('Error fetching adoption applications:', error);
            });
    };

    // Function to format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();
    };

    // Function to handle approving an application
    const handleApprove = (applicationNum) => {
        Axios.post(`http://localhost:3001/api/approve-adoption/${applicationNum}`)
            .then(() => {
                fetchApplications(); // Refresh applications after approval
            })
            .catch(error => {
                console.error('Error approving application:', error);
            });
    };

    // Function to handle rejecting an application
    const handleReject = (applicationNum) => {
        Axios.post(`http://localhost:3001/api/reject-adoption/${applicationNum}`)
            .then(() => {
                fetchApplications(); // Refresh applications after rejection
            })
            .catch(error => {
                console.error('Error rejecting application:', error);
            });
    };

    return (
        <div>
            <h2>Adoption Applications</h2>
            <table>
                <thead>
                    <tr>
                        <th>Application Number</th>
                        <th>Date</th>
                        <th>Pet ID</th>
                        <th>Adopter ID</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map(application => (
                        <tr key={application.applicationNumber}>
                            <td>{application.applicationNumber}</td>
                            <td>{formatDate(application.date)}</td>
                            <td>{application.petID}</td>
                            <td>{application.adopterID}</td>
                            <td>{application.applicationStatus}</td>
                            <td>
                                <button onClick={() => handleApprove(application.applicationNumber)}>Approve</button>
                                <button onClick={() => handleReject(application.applicationNumber)}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdoptionApplications;
