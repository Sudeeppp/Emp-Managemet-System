import express from 'express'
import cors from 'cors'
import router from './routes/auth.js';
import dbConnect from './config/dbconfig.js';


const app = express();

app.use(cors())
app.use(express.json())

//routes
app.use('/api/auth', router)


// connect to database
dbConnect();






//server call
app.listen(process.env.PORT || 6000, () => {
    console.log("server is running on port 6000");
    
})
