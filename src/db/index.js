import mongoose from "mongoose";

import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connection ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection erroe:", error);
        process.exit(1);
       
    }
}

export default connectDB;