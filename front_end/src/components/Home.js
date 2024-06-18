import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import logo from '../css/logo.png';


function Home() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = () => {
        Axios.get('http://localhost:3001/api/adoption-events')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <img src={logo} alt="Logo" style={styles.logo} />
                <h1 style={styles.title}>Upcoming Adoption Events</h1>
            </div>
            <div style={styles.eventGrid}>
                {events.map(event => (
                    <div key={event.eventID} style={styles.eventCard}>
                        <div style={styles.eventHeader}>
                            <h3 style={styles.eventName}>{event.name}</h3>
                        </div>
                        <div style={styles.eventDetails}>
                            <p style={styles.eventInfo}><strong>Date:</strong> {event.date}</p>
                            <p style={styles.eventInfo}><strong>Location:</strong> {event.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    logo: {
        width: '50px',
        marginRight: '10px',
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#333',
    },
    eventGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: '20px',
    },
    eventCard: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
    },
    eventHeader: {
        backgroundColor: '#f7df94',
        padding: '20px',
    },
    eventName: {
        margin: '0',
        fontSize: '24px',
        color: '#333',
    },
    eventDetails: {
        padding: '20px',
    },
    eventInfo: {
        margin: '0',
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.6',
    },
};

export default Home;
