import React from 'react';
import { NavLink } from 'react-router-dom';
import UserPetGrid from './UserPetGrid'; // Import the UserPetGrid component

function UserHomePage() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/user-pet-grid">Pets Available</NavLink>
                    </li>
                    <li>
                        <NavLink to="/adoption-application">Adoption Application</NavLink>
                    </li>
                </ul>
            </nav>
            <UserPetGrid /> {/* Include the UserPetGrid component */}
        </div>
    );
}

export default UserHomePage;
