import express from 'express';
import { createHotel } from '../controllers/HotelController.js';
import Hotel from '../models/Hotel.js';
const router=express.Router();


//Create new Hotel

router.post("/",createHotel);

//update
router.put("/:id",async(req,res)=>{
   
   
    try {
        const updatedHotel=await Hotel.findOneAndUpdate(req.params.id,{$set:req.body},{new:true})
        console.log(req.body)
        console.log(updatedHotel)
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(err)
    }
})

//Delete
router.delete("/:id",async(req,res)=>{
   try {
     await Hotel.findOneAndDelete(req.params.id);
       
        res.status(200).json("Hotel deleted")
    } catch (error) {
        res.status(500).json(err)
    }
})

//get a particular hotel

router.get("/:id",async(req,res)=>{
   try {
         const hotel=await Hotel.findById(req.params.id)
        
         res.status(200).json(hotel)
  
    } catch (error) {
        res.status(500).json(error)
    }
})
//get  hotels

router.get("/",async(req,res,next)=>{
   try {
        const Hotels=await Hotel.find();
    
        res.status(200).json(Hotels)
    } catch (error) {
        res.status(500).json(error)
    }
})



export default router;