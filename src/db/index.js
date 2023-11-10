import mongoose from "mongoose";
import 'dotenv/config'


const connectDB = async ()=>{
    try {
      const connection =   await mongoose.connect(`${process.env.MONGODB_URI}`)
      console.log(`\n mongo db connected !! DB HOT : ${connection}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB;