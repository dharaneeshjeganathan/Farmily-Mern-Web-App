const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Define routes
router.post("/login", UserController.login); // Login route
router.post("/", UserController.createUser); // Route to create a new user

module.exports = router;
