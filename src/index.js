// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/dbConnect.js" ; 
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("Failed to connect to MongoDB",error);
})





























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