// Import necessary components from react-router-dom
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../css/UserLogin.css'; // Import CSS file for styling

function UserLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate(); // Initialize navigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await Axios.post('http://localhost:3001/api/user-login', { username, password });
            if (response.status === 200) {
                console.log('User logged in successfully');
                navigate('/user-home'); // Redirect to user home page
            } else {
                setLoginError('Login failed. Please check your username and password.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setLoginError('An error occurred while logging in. Please try again later.');
        }
    };

    return (
        <div className="login-box">
            <div className="login-container">
                <h2>User Login</h2>
                {loginError && <div className="error-message">{loginError}</div>}
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default UserLogin;
