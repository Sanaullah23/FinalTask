const exprees=require("express");
const router =exprees.Router();
const {createPoetry, getAllPoetries} = require("../controller/poetryController")


router.post("/createdPoetry", createPoetry)
router.get("/getAllPoetries", getAllPoetries)


module.exports=router;