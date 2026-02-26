import { io } from 'socket.io-client';

// Establish a single connection
export const socket = io(import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000', {
    autoConnect: true,
});

export const subscribeToData = (callback) => {
    socket.on('dataUpdate', callback);
    return () => {
        socket.off('dataUpdate', callback);
    };
};
