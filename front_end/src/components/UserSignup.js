import React, { useState } from 'react';
import Axios from 'axios';

function UserSignup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3001/user-signup', {
                username,
                password
            });
            if (response.status === 200 || response.status === 201) {
                alert('Signup successful');
                // Redirect to user login page
                window.location.href = '/user-login';
            } else {
                alert('Signup failed');
                // Handle error
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response && error.response.status === 400) {
                alert('Username already exists. Check if you have an account or use a different username');
            } else {
                alert('An error occurred, please try again later');
            }
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>User Sign Up</h2>
            <form onSubmit={handleSignup} style={styles.form}>
                <label style={styles.label}>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} />
                <label style={styles.label}>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
                <button type="submit" style={styles.button}>Sign Up</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '5px',
    },
    input: {
        marginBottom: '10px',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '3px',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    },
};

export default UserSignup;
