const Pusher = require('pusher');
require('dotenv').config();

// Note: Ensure these keys are added to the Vercel Environment Variables
let pusher;

if (process.env.PUSHER_APP_ID && process.env.PUSHER_KEY) {
    pusher = new Pusher({
        appId: process.env.PUSHER_APP_ID,
        key: process.env.PUSHER_KEY,
        secret: process.env.PUSHER_SECRET,
        cluster: process.env.PUSHER_CLUSTER || 'us2',
        useTLS: true
    });
} else {
    console.warn('Pusher environment variables not found! Real-time pushing is disabled.');
    // Dummy pusher for local dev without keys
    pusher = {
        trigger: (channel, event, data) => {
            console.log(`[Mock Pusher] Triggered ${event} on ${channel} with data:`, data);
        }
    };
}

module.exports = pusher;
