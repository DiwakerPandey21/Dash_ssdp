import Pusher from 'pusher-js';

// Get keys from .env.local in production
const PUSHER_KEY = import.meta.env.VITE_PUSHER_KEY || 'dummy-key';
const PUSHER_CLUSTER = import.meta.env.VITE_PUSHER_CLUSTER || 'us2';

let pusherInstance = null;

if (PUSHER_KEY !== 'dummy-key') {
    pusherInstance = new Pusher(PUSHER_KEY, {
        cluster: PUSHER_CLUSTER,
    });
}

export const subscribeToDashboard = (event, callback) => {
    if (!pusherInstance) return () => { };

    const channel = pusherInstance.subscribe('dashboard-channel');
    channel.bind(event, callback);

    return () => {
        channel.unbind(event, callback);
        pusherInstance.unsubscribe('dashboard-channel');
    };
};
