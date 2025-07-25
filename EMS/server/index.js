import express from 'express'
import cors from 'cors'
// import dbConnect from './config/dbconfig.js';


const app = express();

app.use(cors())
app.use(express.json())



// dbConnect();






//server call
app.listen(process.env.PORT || 6000, () => {
    console.log("server is running on port 6000");
    
})
