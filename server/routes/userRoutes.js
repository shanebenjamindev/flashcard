const express = require('express');
const { register, login } = require('../controllers/authController');
const userRoutes = express.Router();

// Route for user registration
userRoutes.post('/register', register);

// Route for user login
userRoutes.post('/login', login);

module.exports = userRoutes;
