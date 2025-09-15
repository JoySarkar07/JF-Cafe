// backend/services/dbServices.js
require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log('Attempting to connect to MongoDB with URI:', process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected successfully !!!");
    } catch (e) {
        console.error("Database connection failed:", e.message);
        process.exit(1);
    }
}

module.exports = connectDB;