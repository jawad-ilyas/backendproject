import mongoose, { Schema } from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const VideoSchema = new Schema({

    VideoFile: {
        type: String,
        requried: true
    },
    thumnail: {
        type: String,
        requried: true
    },
    title: {
        type: String,
        requried: true
    },
    description : {
        type: String,
        requried: true
    },
    duration : {
        type: Number, // get from cloudinary 
        requried: true
    },
    view : {
        type : Number ,
        default : 0 
    }
    , 
    isPublised : {
        type : Boolean,
        default : true 
    }
    ,
    onwer : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }

}, { timeStamps: true })


VideoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", VideoSchema)