const configureStore= require("@reduxjs/toolkit").configureStore;
const poetryReducer=require("../Features/post");


const store=configureStore({
    reducer: poetryReducer,

     
});

module.exports=store;