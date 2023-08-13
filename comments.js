//Create web server

// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, this is the root page!');
});

// Define a route for another URL
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Start the server and listen on a specific port
const port = 3000; // You can change this to any available port you prefer
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
