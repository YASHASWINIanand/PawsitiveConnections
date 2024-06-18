import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdoptionApplication from './components/AdoptionApplication';
import Home from './components/Home';
import Adopter from './components/Adopter';
import Dashboard from './components/Dashboard';
import logo from '../src/css/logo.png';
import AdminShelter from './components/AdminShelter';
import AdminPet from './components/AdminPet';
import AdminAdopter from './components/AdminAdopter';
import AdminAdoptionEvent from './components/AdminAdoptionEvent';
import AdminAdoptionApplications from './components/AdminAdoptionApplications';
import Pets from './components/Pets';
import KnowYourApplication from './components/KnowYourApplication'; // Import the KnowYourApplication component

function App() {
    return (
        <Router>
            <div style={styles.container}>
                <div style={styles.header}>
                    <img src={logo} alt="Logo" style={styles.logo} />
                    <h1 style={styles.title}>Pawsitive Connections</h1>
                </div>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}>
                            <NavLink to="/" activeclassname="active" style={styles.navLink}>Home</NavLink>
                        </li>
                        <li style={styles.navItem}>
                            <NavLink to="/adoption-application" activeclassname="active" style={styles.navLink}>Adoption Application</NavLink>
                        </li>
                        <li style={styles.navItem}>
                            <NavLink to="/pets" activeclassname="active" style={styles.navLink}>Pets</NavLink>
                        </li>
                        <li style={styles.navItem}>
                            <NavLink to="/adopter" activeclassname="active" style={styles.navLink}>Adopter</NavLink>
                        </li>
                        <li style={styles.navItem}>
                            <NavLink to="/admin-login" activeclassname="active" style={styles.navLink}>Admin Login</NavLink>
                        </li>
                        <li style={styles.navItem}>
                            <NavLink to="/know-your-application" activeclassname="active" style={styles.navLink}>Know Your Application</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin-login" element={<AdminLogin />} />
                    <Route path="/adoption-application" element={<AdoptionApplication />} />
                    <Route path="/pets" element={<Pets />} />
                    <Route path="/adopter" element={<Adopter />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/admin-shelter" element={<AdminShelter />} />
                    <Route path="/admin-pet" element={<AdminPet />} />
                    <Route path="/admin-adopter" element={<AdminAdopter />} />
                    <Route path="/admin-adoption-event" element={<AdminAdoptionEvent />} />
                    <Route path="/admin-adoption-applications" element={<AdminAdoptionApplications />} />
                    <Route path="/know-your-application" element={<KnowYourApplication />} />
                </Routes>
            </div>
        </Router>
    );
}

const styles = {
    container: {
        margin: '20px auto',
        padding: '20px',
        maxWidth: '800px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    logo: {
        width: '50px',
        marginRight: '10px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'space-between',
    },
    navItem: {
        marginRight: '10px',
    },
    navLink: {
        textDecoration: 'none',
        color: '#333',
        padding: '10px',
        borderRadius: '3px',
        transition: 'background-color 0.3s ease',
    },
    active: {
        backgroundColor: '#f0f0f0',
    },
};

export default App;
