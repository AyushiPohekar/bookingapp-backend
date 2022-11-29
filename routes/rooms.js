import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom,updateRoomAvailability} from '../controllers/roomController.js';

import { verifyAdmin } from '../utilis/verifyToken.js';
const router=express.Router();


//Create new Hotel

router.post("/:hotelid",verifyAdmin,createRoom);

//update
router.put("/:id",verifyAdmin,updateRoom);
router.put("/availability/:id",updateRoomAvailability);

//Delete
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);

//get a particular hotel

router.get("/:id",getRoom);
//get  hotels

router.get("/",getRooms);



export default router;