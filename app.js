const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// -------------
const usersRouter =require("./routes/users.route")


//routes
app.use("/users",usersRouter);

//home route
app.get("/",(req,res)=>{
 res.sendFile(__dirname + "/views/index.html");
 
});

//route not found
app.use((req,res,next)=>{
    res.status(404).json({message:"route not found"})
});

//server error

app.get((err,req,res,next)=>{
    res.status(500).json({message:"someting broke"})
    
});












module.exports = app;