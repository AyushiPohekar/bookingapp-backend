import Hotel from "../models/Hotel.js";


export const createHotel=async(req,res,next)=>{
    const newHotel=new Hotel(req.body)
    try {
        const savedHotel=await newHotel.save();
        console.log(savedHotel)
        res.status(200).json(savedHotel)
    } catch (error) {
       next(err);
    }
}
export const updateHotel=async(req,res,next)=>{
    try {
        const updatedHotel=await Hotel.findOneAndUpdate(req.params.id,{$set:req.body},{new:true})
        console.log(req.body)
        console.log(updatedHotel)
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(err)
    }
}
export const deleteHotel=async(req,res,next)=>{
    try {
        await Hotel.findOneAndDelete(req.params.id);
          
           res.status(200).json("Hotel deleted")
       } catch (error) {
           res.status(500).json(err)
       }
}

export const getHotelById=async(req,res,next)=>{
    try {
        const hotel=await Hotel.findById(req.params.id)
       
        res.status(200).json(hotel)
 
   } catch (error) {
       res.status(500).json(error)
   }
}

export const getHotels=async(req,res,next)=>{
    try {
        const Hotels=await Hotel.find();
    
        res.status(200).json(Hotels)
    } catch (error) {
        res.status(500).json(error)
    }
}
