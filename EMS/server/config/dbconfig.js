// import mongoose from "mongoose";


// const dbConnect = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log("mongo database connect");
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// export default dbConnect;


import mongoose from "mongoose";
import { config } from "dotenv"
config()

const dbURL = process.env.MONGO_URL || "mongodb://localhost:27017/employeeManagementSystem"

const dbConnect = async () => {
    try {
        await mongoose.connect(dbURL)
        console.log("mongo database connect");

    } catch (error) {
        console.log("Db connections error :", error.message);

    }
}

export default dbConnect;