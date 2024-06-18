// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

// Navigation bar for admin view
/*<li><Link to="/admin/pets">Pets</Link></li>
                <li><Link to="/admin/adopters">Adopters</Link></li>
                <li><Link to="/admin/adopter-applications">Adopter Applications</Link></li>
                <li><Link to="/admin/adoption-events">Adoption Events</Link></li>*/
const AdminNavigationBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/admin/shelters">Shelters</Link></li>
                
         </ul>
        </nav>
    );
};

// Navigation bar for regular user view
/*const UserNavigationBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/adoption-application">Adoption Application</Link></li>
                <li><Link to="/adopters">Adopters</Link></li>
            </ul>
        </nav>
    );
};*/

// Main navigation component
const NavigationBar = ({ isAdmin }) => {
    return isAdmin ? <AdminNavigationBar /> : <UserNavigationBar />;
};

export default NavigationBar;
