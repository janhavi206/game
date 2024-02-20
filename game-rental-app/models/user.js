// models/user.js

const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  contactNumber: { type: String },
  userType: { type: String, enum: ['Seller', 'Gamer'], required: true }
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
