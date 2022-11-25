const express = require("express");
const app = express()
const {chats} = require("./data/data")
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoute = require('./routes/userRoutes')
dotenv.config();
connectDB();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Api home");
});

// app.get("/api/chat",(req,res)=>{
//     res.send(chats);
// });

// app.get("/api/chat/:id",(req,res)=>{
//     const oneUser = chats.find((c)=> c._id === req.params.id)
//     res.send(oneUser)
// })

app.use('/api/user',userRoute)

app.listen(5000, console.log("Server Started"));
