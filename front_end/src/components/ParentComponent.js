import React from 'react';
import AdminLogin from './AdminLogin';
import { navigate } from 'react-router-dom'; // Import navigate from react-router-dom

function ParentComponent() {
    const handleLoginSuccess = () => {
        console.log('Handling login success...');
        // Navigate to the dashboard page
        navigate('/dashboard'); // Assuming you have imported navigate from react-router-dom
    };

    return (
        <div>
            <AdminLogin onLoginSuccess={handleLoginSuccess} />
        </div>
    );
}

export default ParentComponent;
