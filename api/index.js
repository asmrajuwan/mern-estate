import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from './config/db.js';
import authRouter from "./routes/authRoute.js";
import listingRouter from "./routes/listingRoute.js";
import userRouter from "./routes/userRoute.js";
dotenv.config();

connectDB()

;
const app = express();

app.use(cors())
app.use(express.json());
app.use(cookieParser());


app.listen(3000,()=>{
    console.log('Server is running on port 3000!')
});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/listing", listingRouter)

app.use((err,req,res,next) =>{
    const statusCode =err.statusCode || 500;
    const message = err.message || 'internal server error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});
