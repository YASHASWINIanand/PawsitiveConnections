import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserProfile from './UserProfile'; // Import your user profile component

const UserView = () => {
    return (
        <div>
            <h2>Welcome to User View</h2>
            {/* Define routes within the user view */}
            <Routes>
                <Route path="/user/profile" element={<UserProfile />} />
                {/* Add more routes as needed */}
            </Routes>
        </div>
    );
};

export default UserView;
