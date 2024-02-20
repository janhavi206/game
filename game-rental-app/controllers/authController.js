const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authController = require('./controllers/authController'); // Import the auth controller

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/game_rental_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Routes for user authentication
app.post('/login', authController.login); // Route for user login
app.post('/register', authController.register); // Route for user registration

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
