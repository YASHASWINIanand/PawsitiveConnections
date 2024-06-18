// Import necessary packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Create Express app
const app = express();

// Set up middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up MySQL connection pool
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mangala@9',
    database: 'pet_adoption1',
});

// Create a new shelter
app.post('/api/shelters', (req, res) => {
    const { name, location } = req.body;
    const sql = 'INSERT INTO Shelter (name, location) VALUES (?, ?)';
    db.query(sql, [name, location], (err, result) => {
        if (err) {
            console.error('Error creating shelter:', err);
            res.status(500).send('Error creating shelter');
            return;
        }
        console.log('Shelter created successfully');
        res.status(200).send('Shelter created successfully');
    });
});

// Get all shelters
app.get('/api/shelters', (req, res) => {
    const sql = 'SELECT * FROM Shelter';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching shelters:', err);
            res.status(500).send('Error fetching shelters');
            return;
        }
        res.status(200).json(results);
    });
});

// Get a shelter by ID
app.get('/api/shelters/:shelterID', (req, res) => {
    const shelterID = req.params.shelterID;
    const sql = 'SELECT * FROM Shelter WHERE shelterID = ?';
    db.query(sql, [shelterID], (err, results) => {
        if (err) {
            console.error('Error fetching shelter:', err);
            res.status(500).send('Error fetching shelter');
            return;
        }
        res.status(200).json(results[0]);
    });
});

// Update a shelter by ID
app.put('/api/shelters/:shelterID', (req, res) => {
    const shelterID = req.params.shelterID;
    const { name, location } = req.body;
    const sql = 'UPDATE Shelter SET name = ?, location = ? WHERE shelterID = ?';
    db.query(sql, [name, location, shelterID], (err, result) => {
        if (err) {
            console.error('Error updating shelter:', err);
            res.status(500).send('Error updating shelter');
            return;
        }
        console.log('Shelter updated successfully');
        res.status(200).send('Shelter updated successfully');
    });
});

// Delete a shelter by ID
app.delete('/api/shelters/:shelterID', (req, res) => {
    const shelterID = req.params.shelterID;
    const sql = 'DELETE FROM Shelter WHERE shelterID = ?';
    db.query(sql, [shelterID], (err, result) => {
        if (err) {
            console.error('Error deleting shelter:', err);
            res.status(500).send('Error deleting shelter');
            return;
        }
        console.log('Shelter deleted successfully');
        res.status(200).send('Shelter deleted successfully');
    });
});
// Update a shelter by ID
app.put('/api/shelters/:shelterID', (req, res) => {
    const shelterID = req.params.shelterID;
    const { name, location } = req.body;
    const sql = 'UPDATE Shelter SET name = ?, location = ? WHERE shelterID = ?';
    db.query(sql, [name, location, shelterID], (err, result) => {
        if (err) {
            console.error('Error updating shelter:', err);
            res.status(500).send('Error updating shelter');
            return;
        }
        console.log('Shelter updated successfully');
        res.status(200).send('Shelter updated successfully');
    });
});
// Create a new pet
app.post('/api/pets', (req, res) => {
    const { name, species, adoptionStatus, vaccination, shelterID } = req.body;
    const sql = 'INSERT INTO Pet (name, species, adoptionStatus, vaccination, shelterID) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, species, adoptionStatus, vaccination, shelterID], (err, result) => {
        if (err) {
            console.error('Error creating pet:', err);
            res.status(500).send('Error creating pet');
            return;
        }
        console.log('Pet created successfully');
        res.status(200).send('Pet created successfully');
    });
});

// Delete a pet by ID
app.delete('/api/pets/:petID', (req, res) => {
    const petID = req.params.petID;
    const sql = 'DELETE FROM Pet WHERE petID = ?';
    db.query(sql, [petID], (err, result) => {
        if (err) {
            console.error('Error deleting pet:', err);
            res.status(500).send('Error deleting pet');
            return;
        }
        console.log('Pet deleted successfully');
        res.status(200).send('Pet deleted successfully');
    });
});
// Get all pets
app.get('/api/pets', (req, res) => {
    const sql = 'SELECT * FROM Pet';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching pets:', err);
            res.status(500).send('Error fetching pets');
            return;
        }
        res.status(200).json(results);
    });
});

// Update a pet by ID
app.put('/api/pets/:petID', (req, res) => {
    const petID = req.params.petID;
    const { name, species, adoptionStatus, vaccination, shelterID } = req.body;
    const sql = 'UPDATE Pet SET name = ?, species = ?, adoptionStatus = ?, vaccination = ?, shelterID = ? WHERE petID = ?';
    db.query(sql, [name, species, adoptionStatus, vaccination, shelterID, petID], (err, result) => {
        if (err) {
            console.error('Error updating pet:', err);
            res.status(500).send('Error updating pet');
            return;
        }
        console.log('Pet updated successfully');
        res.status(200).send('Pet updated successfully');
    });
});
/*
//user login
app.post('/api/user-login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Internal server error');
            return;
        }
        if (result.length > 0) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});
*/
// Admin Login
app.post('/api/admin-login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM admins WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Internal server error');
            return;
        }
        if (result.length > 0) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});

/*app.post('/user-signup', (req, res) => {
    const { username, password } = req.body;
    // Check if the username already exists in the database
    const checkUsernameQuery = 'SELECT * FROM users WHERE username = ?';
    db.query(checkUsernameQuery, [username], (err, result) => {
        if (err) {
            console.error('Error checking username:', err);
            res.status(500).send('Error checking username');
            return;
        }
        if (result.length > 0) {
            // If the username already exists, send a response indicating it
            res.status(400).send('Username already exists');
            return;
        }
        // If the username doesn't exist, proceed with creating the user
        const createUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.query(createUserQuery, [username, password], (err, result) => {
            if (err) {
                console.error('Error creating user:', err);
                res.status(500).send('Error creating user');
                return;
            }
            console.log('User created successfully');
            res.status(201).send('User created successfully');
        });
    });
});*/
// Backend API endpoint to get all adopters
app.get('/api/adopters', (req, res) => {
    const sql = 'SELECT * FROM Adopter';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching adopters:', err);
            res.status(500).send('Error fetching adopters');
            return;
        }
        res.status(200).json(results);
    });
});
// Delete an adopter by ID
app.delete('/api/adopters/:adopterID', (req, res) => {
    const adopterID = req.params.adopterID;
    const sql = 'DELETE FROM Adopter WHERE adopterID = ?';
    db.query(sql, [adopterID], (err, result) => {
        if (err) {
            console.error('Error deleting adopter:', err);
            res.status(500).send('Error deleting adopter');
            return;
        }
        console.log('Adopter deleted successfully');
        res.status(200).send('Adopter deleted successfully');
    });
});
// Delete an adoption event by ID
app.delete('/api/adoption-events/:eventID', (req, res) => {
    const eventID = req.params.eventID;
    const sql = 'DELETE FROM AdoptionEvents WHERE eventID = ?';
    db.query(sql, [eventID], (err, result) => {
        if (err) {
            console.error('Error deleting adoption event:', err);
            res.status(500).send('Error deleting adoption event');
            return;
        }
        console.log('Adoption event deleted successfully');
        res.status(200).send('Adoption event deleted successfully');
    });
});
// Create a new adoption event
app.post('/api/adoption-events', (req, res) => {
    const { name, date, location, shelterID } = req.body;
    const sql = 'INSERT INTO AdoptionEvents (name, date, location, shelterID) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, date, location, shelterID], (err, result) => {
        if (err) {
            console.error('Error creating adoption event:', err);
            res.status(500).send('Error creating adoption event');
            return;
        }
        console.log('Adoption event created successfully');
        res.status(200).send('Adoption event created successfully');
    });
});

// Update an adoption event by ID
app.put('/api/adoption-events/:eventID', (req, res) => {
    const eventID = req.params.eventID;
    const { name, date, location, shelterID } = req.body;
    const sql = 'UPDATE AdoptionEvents SET name = ?, date = ?, location = ?, shelterID = ? WHERE eventID = ?';
    db.query(sql, [name, date, location, shelterID, eventID], (err, result) => {
        if (err) {
            console.error('Error updating adoption event:', err);
            res.status(500).send('Error updating adoption event');
            return;
        }
        console.log('Adoption event updated successfully');
        res.status(200).send('Adoption event updated successfully');
    });
});







// Get all pets that are not adopted
app.get('/api/not-adopted-pets', (req, res) => {
    const sql = 'SELECT * FROM Pet WHERE adoptionStatus = ?';
    db.query(sql, ['not adopted'], (err, results) => {
        if (err) {
            console.error('Error fetching pets:', err);
            res.status(500).send('Error fetching pets');
            return;
        }
        res.status(200).json(results);
    });
});

app.get('/api/adoption-events', (req, res) => {
    const sql = 'SELECT * FROM AdoptionEvents';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching adoption events:', err);
            res.status(500).send('Error fetching adoption events');
            return;
        }
        res.status(200).json(results);
    });
});
// Assuming you're using Express
app.get('/api/adoption-events', (req, res) => {
    const sql = 'SELECT * FROM AdoptionEvent';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching events:', err);
            res.status(500).send('Error fetching events');
            return;
        }
        res.status(200).json(results);
    });
});
app.get('/api/available-pets', (req, res) => {
    // Query to fetch available pets from the database
    const sql = 'SELECT * FROM Pet WHERE adoptionStatus = "available"';
  
    // Execute the query
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching available pets:', err);
        res.status(500).send('Error fetching available pets');
        return;
      }
      res.status(200).json(results);
    });
  });
  app.post('/api/adopters', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO Adopter (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            console.error('Error creating adopter:', err);
            res.status(500).send('Error creating adopter');
            return;
        }
        console.log('Adopter created successfully');
        res.status(200).json({ adopterID: result.insertId });
    });
});
app.post('/api/adoption-applications', (req, res) => {
    const { date, petID, adopterID } = req.body;
    
    // Insert the adoption application into the database
    const sql = 'INSERT INTO AdoptionApplication (date, petID, adopterID) VALUES (?, ?, ?)';
    db.query(sql, [date, petID, adopterID], (err, result) => {
        if (err) {
            console.error('Error creating adoption application:', err);
            res.status(500).send('Error creating adoption application');
            return;
        }

        // Return the application number (insert ID) as the response
        res.status(200).json(result.insertId);
    });
});
app.post('/api/adoption-applications', (req, res) => {
    const { date, petID, adopterID } = req.body;
    
    // Insert the adoption application into the database
    const sql = 'INSERT INTO AdoptionApplication (date, petID, adopterID, applicationStatus) VALUES (?, ?, ?, ?)';
    const values = [date, petID, adopterID, 'Pending']; // Assuming 'Pending' is the default status
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error creating adoption application:', err);
            res.status(500).send('Error creating adoption application');
            return;
        }

        // Return the application number (insert ID) as the response
        res.status(200).json(result.insertId);
    });
});
// Define endpoint for fetching adoption applications
app.get('/api/admin-adoption-applications', (req, res) => {
    const sql = 'SELECT * FROM AdoptionApplication';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching adoption applications:', err);
            res.status(500).send('Error fetching adoption applications');
            return;
        }
        res.status(200).json(results);
    });
});
// Endpoint to fetch application details by application number
app.get('/api/adoption-application/:applicationNumber', (req, res) => {
    const applicationNumber = req.params.applicationNumber;
    const sql = `
        SELECT *
        FROM AdoptionProcessView
        WHERE applicationNumber = ?
    `;
    db.query(sql, [applicationNumber], (err, results) => {
        if (err) {
            console.error('Error fetching application details:', err);
            res.status(500).send('Error fetching application details');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Application not found');
            return;
        }
        res.status(200).json(results[0]);
    });
});
// Endpoint to approve adoption application
app.post('/api/approve-adoption/:applicationNumber', (req, res) => {
    const applicationNumber = req.params.applicationNumber;

    // Call the stored procedure to approve the application
    const approveProcedure = 'CALL ApproveAdoptionApplication(?)';
    db.query(approveProcedure, [applicationNumber], (err, result) => {
        if (err) {
            console.error('Error approving application:', err);
            res.status(500).send('Error approving application');
            return;
        }
        
        res.status(200).send('Application approved successfully');
    });
});

// Endpoint to reject adoption application
app.post('/api/reject-adoption/:applicationNumber', (req, res) => {
    const applicationNumber = req.params.applicationNumber;

    // Call the stored procedure to reject the application
    const rejectProcedure = 'CALL RejectAdoptionApplication(?)';
    db.query(rejectProcedure, [applicationNumber], (err, result) => {
        if (err) {
            console.error('Error rejecting application:', err);
            res.status(500).send('Error rejecting application');
            return;
        }
        
        res.status(200).send('Application rejected successfully');
    });
});



// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
