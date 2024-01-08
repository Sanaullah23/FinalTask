//1 importing express library for server side request managing and rendering
const exprees= require('express');
const mongoose=require('mongoose');
const cors=require("cors")
const app=exprees()
app.use(cors())
app.use(exprees.json())
const Poetry=require("./routes/poetryRoutes")


app.use("/api/v1", Poetry)


const DB_URL='mongodb://localhost:27017/'
mongoose.connect(DB_URL).then(()=>{console.log("Successfuly connected database")}).catch((error)=>{console.log(error)});




//server running on port number 500
app.listen(5000,()=>{
    console.log("Server running on 5000");
});