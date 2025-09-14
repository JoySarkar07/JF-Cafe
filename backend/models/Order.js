const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            trim: true,
            required: true
        },
        productId: {
            type: String,
            trim: true,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        amount: {
            type: Number,
            required: true,
            min: 0
        },
        paymentMethod: {
            type: String, // Changed from Number to String for better readability
            required: true,
            trim: true
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "complete", "cancelled"],
            default: "pending"
        },
        status: {
            type: String,
            enum: ["pending", "complete", "cancelled"], // Added more common statuses
            default: "pending"
        }
    }, 
    { 
        strict: true,
        timestamps: true // Alternatively, you can use this instead of createdAt
    }
);

module.exports = mongoose.model("Order", OrderSchema);