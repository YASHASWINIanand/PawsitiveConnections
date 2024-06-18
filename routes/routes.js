const express = require('express');
const router = express.Router();
const dbPool = require('../db/dbSetup');

// Create a new shelter
router.post('/shelters', (req, res) => {
    const { name, location } = req.body;
    const sql = 'INSERT INTO Shelter (name, location) VALUES (?, ?)';
    dbPool.query(sql, [name, location], (err, result) => {
        if (err) {
            console.error('Error creating shelter:', err);
            res.status(500).send('Error creating shelter');
            return;
        }
        console.log('Shelter created successfully');
        res.status(201).send('Shelter created successfully');
    });
});

// Get all shelters
router.get('/shelters', (req, res) => {
    const sql = 'SELECT * FROM Shelter';
    dbPool.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching shelters:', err);
            res.status(500).send('Error fetching shelters');
            return;
        }
        res.json(results);
    });
});

// Get a shelter by ID
router.get('/shelters/:shelterID', (req, res) => {
    const shelterID = req.params.shelterID;
    const sql = 'SELECT * FROM Shelter WHERE shelterID = ?';
    dbPool.query(sql, [shelterID], (err, results) => {
        if (err) {
            console.error('Error fetching shelter:', err);
            res.status(500).send('Error fetching shelter');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Shelter not found');
            return;
        }
        res.json(results[0]);
    });
});

// Update a shelter by ID
router.put('/shelters/:shelterID', (req, res) => {
    const shelterID = req.params.shelterID;
    const { name, location } = req.body;
    const sql = 'UPDATE Shelter SET name = ?, location = ? WHERE shelterID = ?';
    dbPool.query(sql, [name, location, shelterID], (err, result) => {
        if (err) {
            console.error('Error updating shelter:', err);
            res.status(500).send('Error updating shelter');
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('Shelter not found');
            return;
        }
        console.log('Shelter updated successfully');
        res.status(200).send('Shelter updated successfully');
    });
});

// Delete a shelter by ID
router.delete('/shelters/:shelterID', (req, res) => {
    const shelterID = req.params.shelterID;
    const sql = 'DELETE FROM Shelter WHERE shelterID = ?';
    dbPool.query(sql, [shelterID], (err, result) => {
        if (err) {
            console.error('Error deleting shelter:', err);
            res.status(500).send('Error deleting shelter');
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('Shelter not found');
            return;
        }
        console.log('Shelter deleted successfully');
        res.status(200).send('Shelter deleted successfully');
    });
});

module.exports = router;

