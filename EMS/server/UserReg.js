import dbConnect from "./config/dbconfig.js"
import User from "./models/User.js"
import bcrypt from 'bcrypt'

const userRegister = async () => {
    dbConnect()
    try {
        const hashPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name: "admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        })
        await newUser.save()
        console.log("user created");
    } catch (error) {
        console.log(error);
        
    }
}
userRegister()