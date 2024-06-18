const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 20, // Adjust this value as needed
    host: 'localhost',
    user: 'root',
    password: 'Mangala@9',
    database: 'pet_adoption',// Replace with your database name
    waitForConnections: true,
    queueLimit: 0
});

// Export the pool to be used in other modules
module.exports = pool;
