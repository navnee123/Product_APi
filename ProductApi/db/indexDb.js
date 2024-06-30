
// const mongoose = require("mongoose");
// const DB_NAME=require("../constants.js")

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// connection of mongoose
const connectDB = async () => {

    try {
       // const uri = `${process.env.MONGODB_URI}/${DB_NAME}`;
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n ⚙️  MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGODB connection error", error)
        process.exit(1)
    }
}

export default connectDB  
//module.exports=connectDB