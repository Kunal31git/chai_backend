// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/dbConnect.js" ; 

dotenv.config({
    path: './.env'
})

connectDB()





























//FIRST APPROACH FOR DB Connection
// import express from "express";

// const app = express();

// ( async ()=>{ 
//     try{
//        await mongoose.connect(`${process.env.MongoDB_URI}/${DB_NAME}`);

//        app.on('error', (error)=>{
//             console.log("ERR: ",error);
//             throw error;
//        })

//        app.listen(process.env.PORT , ()=> {
//             console.log(`App is listening on ${process.env.PORT}`);
//        })
//     }
//     catch(err){
//         console.error("Error connecting to MongoDB:", err);
//     }
// })()