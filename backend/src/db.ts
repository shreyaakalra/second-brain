import mongoose from "mongoose";
import "dotenv/config"

export default async function connectDB(){
    try{
        const URI = process.env.MONGODB_URI;

        if(!URI){
            throw new Error("MONGODB_URI is missing!")
        }

        await mongoose.connect(URI);
        console.log("DB Connected");

    }catch(err){
        console.log("DB not connected. Some error has occurred.", err);
    }
}