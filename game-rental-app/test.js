// test.js

const mongoose = require('mongoose');
const User = require('./models/user');

// Test database connection
mongoose.connect('mongodb://localhost/game_rental_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Test model setup
// Create a new user
const newUser = new User({
  username: 'john_doe',
  email: 'john@example.com',
  password: 'password123',
  firstName: 'John',
  lastName: 'Doe',
  contactNumber: '1234567890',
  userType: 'Gamer'
});

// Save the user to the database
newUser.save()
  .then(user => console.log('User saved to database:', user))
  .catch(err => console.error('Failed to save user to database:', err));
