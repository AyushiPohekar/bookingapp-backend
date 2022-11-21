


import express from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/UserController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utilis/verifyToken.js';

const router=express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user,you are logged in")
})
router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello user,you are logged in and you can delete your account")
})
router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello admin,you are logged in and you can delete all account")
})

//Create new User

router.post("/",createUser);

//update
router.put("/:id",updateUser);

//Delete
router.delete("/:id",deleteUser);

//get a particular User

router.get("/:id",getUserById);
//get  Users

router.get("/",getUsers);



export default router;
