// Database configuration placeholder
// Use mongoose.connect() or pg (PostgreSQL) pool connection here

const connectDB = async () => {
    try {
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
};

module.exports = connectDB;
