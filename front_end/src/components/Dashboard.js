import React, { useState } from 'react';
import AdminShelter from './AdminShelter';
import AdminPet from './AdminPet';
import AdminAdopter from './AdminAdopter';
import AdminAdoptionEvent from './AdminAdoptionEvent';
import AdminAdoptionApplications from './AdminAdoptionApplications';
import '../css/Dashboard.css'; // Import CSS file for styling

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleNavigation = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <nav>
        <ul className="nav-links">
          <li onClick={() => handleNavigation(null)}>Home</li>
          <li onClick={() => handleNavigation(<AdminShelter />)}>Admin Shelter</li>
          <li onClick={() => handleNavigation(<AdminPet />)}>Admin Pet</li>
          <li onClick={() => handleNavigation(<AdminAdopter />)}>Admin Adopter</li>
          <li onClick={() => handleNavigation(<AdminAdoptionEvent />)}>Admin Adoption Event</li>
          <li onClick={() => handleNavigation(<AdminAdoptionApplications />)}>Admin Adoption Applications</li>
        </ul>
      </nav>
      <div className="selected-component">
        {/* Render the selected component */}
        {selectedComponent}
      </div>
    </div>
  );
}

export default Dashboard;
