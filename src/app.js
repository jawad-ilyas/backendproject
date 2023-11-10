import express from "express"

import cors from "cors"
import cookieParser from "cookie-parser"; // this is used for set and get cookie on client browser
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials :true
}))
app.use(express.json({limit : "16kb"}))

// json used for the get data from the forms 

app.use(express.urlencoded({extended : true})) // why we use extended with the help of the extend we use object inside object
// urlencoded used for the get data from the url 
app.use(express.static("public")) // static is used for the image , pdb 
app.use(cookieParser())
export {app}