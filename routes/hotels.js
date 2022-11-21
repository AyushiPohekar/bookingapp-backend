import express from 'express';
import { createHotel, deleteHotel, getHotelById, getHotels, updateHotel } from '../controllers/HotelController.js';
import Hotel from '../models/Hotel.js';
const router=express.Router();


//Create new Hotel

router.post("/",createHotel);

//update
router.put("/:id",updateHotel);

//Delete
router.delete("/:id",deleteHotel);

//get a particular hotel

router.get("/:id",getHotelById);
//get  hotels

router.get("/",getHotels);



export default router;