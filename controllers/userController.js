import User from "../models/User.js";


export const createUser=async(req,res,next)=>{
    const newUser=new User(req.body)
    try {
        const savedUser=await newUser.save();
        console.log(savedUser)
        res.status(200).json(savedUser)
    } catch (error) {
       next(err);
    }
}
export const updateUser=async(req,res,next)=>{
    try {
        const updatedUser=await User.findOneAndUpdate(req.params.id,{$set:req.body},{new:true})
        console.log(req.body)
        console.log(updatedUser)
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(err)
    }
}
export const deleteUser=async(req,res,next)=>{
    try {
        await User.findOneAndDelete(req.params.id);
          
           res.status(200).json("user deleted")
       } catch (error) {
           res.status(500).json(err)
       }
}

export const getUserById=async(req,res,next)=>{
    try {
        const user=await user.findById(req.params.id)
       
        res.status(200).json(user)
 
   } catch (error) {
       res.status(500).json(error)
   }
}

export const getUsers=async(req,res,next)=>{
    try {
        const users=await User.find();
    
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}
