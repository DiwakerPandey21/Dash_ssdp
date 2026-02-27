const express = require('express');
const router = express.Router();
const { getData, createData } = require('../controllers/data.controller');
const { protect, authorize } = require('../config/auth');

// @route   GET /api/data
// @desc    Retrieve all existing data (Protected: Viewers, Contributors, Admins)
router.get('/', protect, getData);

// @route   POST /api/data
// @desc    Submit new entry (Protected: Contributors and Admins only)
router.post('/', protect, authorize('CONTRIBUTOR', 'ADMIN'), createData);

module.exports = router;
