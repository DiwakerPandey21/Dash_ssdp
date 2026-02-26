export const pushLiveData = async (payload) => {
    try {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error('API Error');
        return await response.json();
    } catch (error) {
        console.error('pushLiveData error:', error);
        throw error;
    }
};

export const fetchHistoricalData = async () => {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) throw new Error('API Error');
        return await response.json();
    } catch (error) {
        console.error('fetchHistoricalData error:', error);
        throw error;
    }
};
