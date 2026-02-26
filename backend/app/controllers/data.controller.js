const getSocketIO = require('../services/realtime.service').getSocketIO;
const pushToPowerBI = require('../services/powerbi.service').pushToPowerBI;

const getData = async (req, res) => {
    try {
        // Fetch logic from DB
        res.status(200).json({ message: "Data fetched successfully", data: [] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createData = async (req, res) => {
    try {
        const newData = req.body;
        // 1. Save to DB logic here

        // 2. Push to Real-time socket
        const io = getSocketIO();
        if (io) {
            io.emit('dataUpdate', newData);
        }

        // 3. Push to Power BI
        await pushToPowerBI(newData);

        res.status(201).json({ message: "Data created and synced", data: newData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getData, createData };
