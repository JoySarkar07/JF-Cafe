// backend/index.js
const express = require('express');
const cors = require("cors");
const storeRouter = require("./routes/storeRoutes");
const productRouter = require("./routes/productRoutes");
const orderRouter = require("./routes/orderRoutes");
const userRouter = require("./routes/userRoutes");
const connectDB = require("./services/dbServices");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: process.env.CORE_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/api/store", storeRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (e) {
        console.error("Failed to start server:", e.message);
        process.exit(1);
    }
};

startServer();