const socketIo = require('socket.io');

let io;

const initSocket = (server) => {
    io = socketIo(server, {
        cors: {
            origin: '*', // For production, specify frontend domain
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log('Client connected:', socket.id);

        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });

    return io;
};

const getSocketIO = () => {
    if (!io) {
        console.warn('Socket.IO is not initialized!');
    }
    return io;
};

module.exports = { initSocket, getSocketIO };
