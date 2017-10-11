var express=require('express');
var router=express.Router();

router.get("/",function (req,res) {
    res.send("get home")
})

router.post("/",function (req,res) {
    res.send("post home")
})

module.exports=router;