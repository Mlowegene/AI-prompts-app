import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected) {
        console.log('mongo db is connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,
        })

        isConnected = true;
        console.log("mongodb connected");
    } catch (error) {
        console.log('database error',error);
    }
}