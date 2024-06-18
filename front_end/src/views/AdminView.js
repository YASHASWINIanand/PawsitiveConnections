import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard'; // Import your admin dashboard component

const AdminView = () => {
    return (
        <div>
            <h2>Welcome to Admin View</h2>
            {/* Define routes within the admin view */}
            <Routes>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                {/* Add more routes as needed */}
            </Routes>
        </div>
    );
};

export default AdminView;
