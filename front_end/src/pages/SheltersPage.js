

import React from 'react';
import AddShelterForm from '../components/AddShelterForm.js';
import ShelterGrid from '../components/ShelterGrid.js';

function SheltersPage() {
    return (
        <div>
            <AddShelterForm />
            <hr /> {/* Adding a horizontal line to separate the components */}
            <ShelterGrid />
        </div>
    );
}

export default SheltersPage;
