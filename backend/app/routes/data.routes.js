const express = require('express');
const router = express.Router();
const { getData, createData } = require('../controllers/data.controller');

// @route   GET /api/data
// @desc    Retrieve all existing data
router.get('/', getData);

// @route   POST /api/data
// @desc    Submit new entry (Viewer to Contributor)
router.post('/', createData);

module.exports = router;
