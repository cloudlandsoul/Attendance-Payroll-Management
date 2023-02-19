// Import required libraries
const mysql = require('mysql');

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database.');
});

// Export the database connection
module.exports = db;
