const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const pusher = require('../config/pusher'); // We will create this next
const pushToPowerBI = require('../services/powerbi.service').pushToPowerBI;

const getData = async (req, res) => {
    try {
        const events = await prisma.event.findMany({
            orderBy: { timestamp: 'desc' },
            take: 100 // Limit for dashboard
        });
        res.status(200).json({ message: "Data fetched successfully", data: events });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createData = async (req, res) => {
    try {
        const { source, payload } = req.body;

        // 1. Save to Prisma DB
        const newEvent = await prisma.event.create({
            data: {
                source,
                payload,
                userId: req.user.id // Pulled from the JWT middleware
            }
        });

        // 2. Push to Real-time Pusher Channel
        if (pusher) {
            pusher.trigger('dashboard-channel', 'dataUpdate', newEvent);
        }

        // 3. (Optional) Direct Push to Power BI if not using DirectQuery
        // await pushToPowerBI(newEvent);

        res.status(201).json({ message: "Data created and synced", data: newEvent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getData, createData };
