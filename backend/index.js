require("dotenv").config();
const express = require('express');
const cors = require("cors");
const storeRouter = require("./routes/storeRoutes");
const productRouter = require("./routes/productRoutes");
const orderRouter = require("./routes/orderRoutes");
const userRouter = require("./routes/userRoutes");
const connectDB = require("./services/dbServices");


const app = express();

app.use(express.json());
app.use(cors({origin : process.env.CORE_ORIGIN}));

app.use("/api/store", storeRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);

try{
    connectDB();
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Example app listening on port ${process.env.SERVER_PORT}`);
    })
}catch(e){
    console.log("Internal server error : "+e.message);
}
