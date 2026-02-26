const express = require('express');
const cors = require('cors');

const dataRoutes = require('./routes/data.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Main Routes
app.use('/api/data', dataRoutes);

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', environment: process.env.NODE_ENV });
});

module.exports = app;
