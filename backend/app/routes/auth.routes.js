const express = require('express');
const { register, login } = require('../controllers/auth.controller');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
router.post('/login', login);

module.exports = router;
