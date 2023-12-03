import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import authRouter from "./routes/authRoute.js";
import listingRouter from "./routes/listingRoute.js";
import userRouter from "./routes/userRoute.js";

import connectDB from './config/db.js';
dotenv.config();


connectDB();

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();
app.use(express.json());
app.use(cookieParser());


app.listen(3000,()=>{
    console.log('Server is running on port 3000!')
});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/listing", listingRouter)

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})


app.use((err,req,res,next) =>{
    const statusCode =err.statusCode || 500;
    const message = err.message || 'internal server error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});
