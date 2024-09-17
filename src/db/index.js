import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb = async () =>{
    try{
        const conn = await mongoose.connect(`${process.env.DB_URL} / ${DB_NAME}`);
        console.log(`Mongoose connected...\n`);
    }
    catch(err){
        console.log("Error connecting db..", err);
        process.exit(1);
    }
};

export default connectdb;