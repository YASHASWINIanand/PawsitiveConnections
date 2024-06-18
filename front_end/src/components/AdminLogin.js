import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const adminData = { username, password };

        Axios.post('http://localhost:3001/api/admin-login', adminData)
            .then(() => {
                console.log('Admin logged in successfully');
                navigate('/dashboard');
            })
            .catch((error) => {
                console.error('Error logging in:', error);
            });
    };

    const styles = {
        container: {
            width: '320px',
            margin: '100px auto',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f7f7f7',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
        },
        input: {
            width: 'calc(100% - 20px)',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease',
        },
        button: {
            width: 'calc(100% - 20px)',
            padding: '12px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#6abf6b',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginTop: '20px',
        },
    };

    return (
        <div className="login-box">
            <div className="login-container" style={styles.container}>
                <h2 className="title">Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="username" style={styles.label}>Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            style={styles.input} 
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password" style={styles.label}>Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            style={styles.input} 
                        />
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
