const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const dataRoutes = require('./routes/data.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate Limiter
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window`
    message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api/', apiLimiter);

// Main Routes
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', environment: process.env.NODE_ENV });
});

module.exports = app;
