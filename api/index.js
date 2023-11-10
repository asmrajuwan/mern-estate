import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
dotenv.config();

const connectDB = async ()=>{
    try {
      const conn = await mongoose.connect(process.env.MONGO_URL)
      console.log(`Connected to Mongodb database ${conn.connection.host}`)  
    } catch (error) {
        console.log(`Error in mongoDb ${error}`)
        
    }
};
connectDB()

const app = express();
app.use(express.json());

app.listen(3000,()=>{
    console.log('Server is running on port 3000!')
});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
