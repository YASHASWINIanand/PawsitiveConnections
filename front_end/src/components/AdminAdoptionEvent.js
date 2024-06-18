import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AdminAdoptionEvent() {
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: '',
        shelterID: ''
    });

    const fetchEvents = () => {
        Axios.get('http://localhost:3001/api/adoption-events')
            .then(response => {
                setEvents(response.data.map(event => ({
                    ...event,
                    date: formatDate(event.date) // Format date to YYYY-MM-DD
                })));
            })
            .catch(error => {
                console.error('Error fetching adoption events:', error);
            });
    };

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    // Function to format the date to YYYY-MM-DD
    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the date to YYYY-MM-DD
        const formattedDate = formatDate(formData.date);

        Axios.post('http://localhost:3001/api/adoption-events', { ...formData, date: formattedDate })
            .then(response => {
                console.log('Adoption event created successfully');
                setFormData({
                    name: '',
                    date: '',
                    location: '',
                    shelterID: ''
                });
                fetchEvents(); // Refresh the events list after successful creation
            })
            .catch(error => {
                console.error('Error creating adoption event:', error);
            });
    };

    const handleUpdate = (eventID) => {
        const eventToUpdate = events.find(event => event.eventID === eventID);
        const updatedName = window.prompt('Enter the updated name:', eventToUpdate.name);
        if (updatedName === null) return;
        const updatedDate = window.prompt('Enter the updated date:', eventToUpdate.date);
        if (updatedDate === null) return;
        const updatedLocation = window.prompt('Enter the updated location:', eventToUpdate.location);
        if (updatedLocation === null) return;
        const updatedShelterID = window.prompt('Enter the updated shelter ID:', eventToUpdate.shelterID);
        if (updatedShelterID === null) return;
        Axios.put(`http://localhost:3001/api/adoption-events/${eventID}`, {
            name: updatedName,
            date: updatedDate,
            location: updatedLocation,
            shelterID: updatedShelterID
        })
        .then(() => {
            console.log('Adoption event updated successfully');
            fetchEvents(); // Update the events list after successful update
        })
        .catch((error) => {
            console.error('Error updating adoption event:', error);
        });
    };

    const handleDelete = (eventID) => {
        Axios.delete(`http://localhost:3001/api/adoption-events/${eventID}`)
            .then(response => {
                console.log('Adoption event deleted successfully');
                fetchEvents(); // Refresh the events list after successful deletion
            })
            .catch(error => {
                console.error('Error deleting adoption event:', error);
            });
    };

    return (
        <div>
            <h2>Admin Adoption Event Component</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
                <input type="text" name="shelterID" value={formData.shelterID} onChange={handleChange} placeholder="Shelter ID" required />
                <button type="submit">Add Adoption Event</button>
            </form>
            <table className="events-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Shelter ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.eventID}>
                            <td>{event.eventID}</td>
                            <td>{event.name}</td>
                            <td>{event.date}</td>
                            <td>{event.location}</td>
                            <td>{event.shelterID}</td>
                            <td>
                                <button onClick={() => handleUpdate(event.eventID)}>Update</button>
                                <button onClick={() => handleDelete(event.eventID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminAdoptionEvent;
