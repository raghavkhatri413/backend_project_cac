import connectDB from './db/index.js';
import dotenv from 'dotenv';
import express from "express";

dotenv.config({ path: './.env' });
const app=express();
const Port=process.env.port;

connectDB()
.then(()=>{
    app.listen(Port,()=>{
        console.log(`Server is running on port: ${Port}`);
    })
})
.catch((error)=>{
    console.log(`MongoDB connection failed: ${error}`);
})