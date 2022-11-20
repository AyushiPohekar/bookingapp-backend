import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authroute from "./routes/auth.js"
import usersroute from "./routes/users.js"
import hotelsroute from "./routes/hotels.js"
import roomsroute from "./routes/rooms.js"


dotenv.config()
const app=express();

const port=process.env.port||1000;



const DB=process.env.MONGO;

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true,

}).then(()=>console.log("Mongo DB connected😀")).catch((err)=>{console.log(err)})




app.get("/",(req,res)=>{
    res.send("welcome to booking app")
})

//middlewares
app.use(express.json())
app.use("/api/auth",authroute)
app.use("/api/users",usersroute)
app.use("/api/hotels",hotelsroute)
app.use("/api/rooms",roomsroute)


app.listen(port,()=>{
    console.log(`server started at port no:${port}`)
})