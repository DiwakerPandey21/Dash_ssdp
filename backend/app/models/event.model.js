// Example Mongoose/Sequelize Schema
// const mongoose = require('mongoose');

/*
const EventSchema = new mongoose.Schema({
    source: { type: String, required: true },
    payload: { type: Object, required: true },
    timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Event', EventSchema);
*/

const getDummyEventModel = () => {
    // Model placeholder
    return {};
};

module.exports = { getDummyEventModel };
