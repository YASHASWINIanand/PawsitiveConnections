import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AdoptionEventsTable() {
    const [events, setEvents] = useState([]);

    // Function to fetch all adoption events from the backend
    const fetchEvents = () => {
        Axios.get('http://localhost:3001/api/adoption-events')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching adoption events:', error);
            });
    };

    // Fetch adoption events when the component mounts
    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Adoption Events</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.eventID}>
                            <td>{event.eventID}</td>
                            <td>{event.name}</td>
                            <td>{event.date}</td>
                            <td>{event.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdoptionEventsTable;
