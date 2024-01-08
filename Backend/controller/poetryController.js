const mongoose=require("mongoose");

const Poetry=require("../Models/Poetry")

exports.createPoetry=async(req, res)=>{
    try {
        const data=  await Poetry.create(req.body);
        res.status(200).json({ success: true,  data}); 
    } catch (error) {

        console.log(error)
        
    }    
};

exports.getAllPoetries=async(req, res)=>{
    try {
        const data=  await Poetry.find();
        res.status(200).json({ success: true,  data}); 
    } catch (error) {
        console.log(error)
    }

}
