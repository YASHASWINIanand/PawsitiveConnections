// AdminShelter.js
import React from 'react';
import ShelterGrid from './ShelterGrid'; // Import ShelterGrid component
import AddShelterForm from './AddShelterForm'; // Import AddShelterForm component

function AdminShelter() {
  return (
    <div>
      <h2>Admin Shelter Component</h2>
      <AddShelterForm />
      <ShelterGrid />
    </div>
  );
}

export default AdminShelter; // Make sure to export the component
