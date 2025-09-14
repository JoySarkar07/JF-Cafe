require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("Databaase connected successfully !!!");
        });
    }catch(e){
        console.log("Database connection failed");
        process.exit(1);
    }
}

module.exports = connectDB;