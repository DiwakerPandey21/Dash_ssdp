const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'data.json');

// Middleware
app.use(cors());
app.use(express.json());

// Load data from file
let data = [];
if (fs.existsSync(DATA_FILE)) {
  data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

// API Routes
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.post('/api/data', (req, res) => {
  const newEntry = { id: Date.now(), ...req.body, timestamp: new Date() };
  data.push(newEntry);
  // Save to file
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  // Broadcast update
  io.emit('dataUpdate', newEntry);
  res.status(201).json(newEntry);
});

// Socket.io for real-time
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});