


import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: "./env"
})
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running on the this port ${process.env.PORT}`)
        })
        app.on("error", (err) => {
            console.log(err)
        })
    })
    .catch((err) => console.log("Mongo db collection error", err))



// import mongoose from "mongoose";
// import 'dotenv/config'

// import express from "express";
// import { DB_NAME } from "./constant.mjs"; // Correct the import path
// const app = express();
// // because they have some code
// ; (async () => {
//     console.log(DB_NAME)
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}`)
//         console.log("database is connected")
//         app.on("error", (err) => {
//             console.log(err)
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`port is listen on ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("err", error)
//         throw error
//     }


// })()