// AdminPet.js
import React from 'react';
import AddPetForm from './AddPetForm'; // Import AddPetForm component
import PetGrid from './PetGrid'; // Import PetGrid component

function AdminPet() {
  return (
    <div>
      <h2>Admin Pet Component</h2>
      <AddPetForm />
      <PetGrid />
    </div>
  );
}

export default AdminPet; // Make sure to export the component
