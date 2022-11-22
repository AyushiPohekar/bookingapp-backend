import express from 'express';
import { createHotel, deleteHotel, getHotelById, getHotels, updateHotel,countByCity,countByType,getHotelRooms } from '../controllers/HotelController.js';
import Hotel from '../models/Hotel.js';
import { verifyAdmin } from '../utilis/verifyToken.js';
const router=express.Router();


//Create new Hotel

router.post("/",verifyAdmin,createHotel);

//update
router.put("/:id",verifyAdmin,updateHotel);

//Delete
router.delete("/:id",verifyAdmin,deleteHotel);

//get a particular hotel

router.get("/find/:id",getHotelById);
//get  hotels

router.get("/",getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);



export default router;