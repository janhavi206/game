const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/game_rental_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Import models
const User = require('./models/user');
// Import other models similarly
