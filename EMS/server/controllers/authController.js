
import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
const login =async(req,res)=>{
   try {
        const {email,password} = req.body
       console.log(email, password);
       const user = await User.findOne({email})
       if(!user){
           return res.status(404).json({message:"User not found"})
       }
       const isMatch = await bcrypt.compare(password, user.password)
       
       if(!isMatch){
           return res.status(400).json({message:"Invalid credentials"})
       }
       
       //send the token
       const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "2d" })

       res.status(200).json({ message: "Login successful" ,token,user:{_id:user._id,name:user.name,email:user.email,role:user.role}})

   } catch (error) {
        res.status(500).json({message:error.message})
        
   }
}

export {login}