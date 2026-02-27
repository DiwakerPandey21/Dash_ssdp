import { useState, useEffect } from 'react';
import { subscribeToDashboard } from '../services/pusher';
import axios from 'axios';
import useAuthStore from '../store/authStore';

export const useLiveData = () => {
    const [data, setData] = useState([]);
    const { token } = useAuthStore();

    useEffect(() => {
        if (!token) return;

        // Initial fetch
        const fetchHistory = async () => {
            try {
                const res = await axios.get('/api/data', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setData(res.data.data.reverse()); // Reverse to chronological order for charts
            } catch (error) {
                console.error('Failed to fetch historical data', error);
            }
        };

        fetchHistory();

        // Listen for realtime Pusher updates
        const unsubscribe = subscribeToDashboard('dataUpdate', (newEvent) => {
            setData(prev => [...prev.slice(-99), newEvent]); // Keep maximum 100 points
        });

        return () => unsubscribe();
    }, [token]);

    return data;
};
