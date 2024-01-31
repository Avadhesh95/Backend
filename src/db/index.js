import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

export const connectDB = async ()=> {
    try {
        const dbConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Connection Established !! DB HOST: ${dbConnectionInstance.connection.host}`);
    } catch (error) {
        console.log("Database connection error : ", error);
        process.exit(1);
    }
}

export default connectDB;
