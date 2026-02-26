import { useState, useEffect } from 'react';
import { subscribeToData } from '../services/socket';
import { fetchHistoricalData } from '../services/api';

export const useLiveData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Initial fetch
        fetchHistoricalData().then(res => setData(res.data)).catch(console.error);

        // Listen for realtime updates
        const unsubscribe = subscribeToData((newData) => {
            setData(prev => [...prev, newData]);
        });

        return () => unsubscribe();
    }, []);

    return data;
};
