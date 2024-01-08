const mongoose=require("mongoose")


// Creating Schemas to Store Data in DataBase.
const poetrySchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, "please enter poetry name"]
    },
    poetrytxt:{
        type:String,
        required:[true, "Enter the Poetry"]
    }
  
});


module.exports=mongoose.model("Poetry",poetrySchema);