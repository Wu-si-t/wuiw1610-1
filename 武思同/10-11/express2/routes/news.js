var express=require('express');
var router=express.Router();
router.route('/')
    .get(function (req,res) {
    res.send("get news")
    })
    .post(function (req,res) {
    res.send("post news")
    })

router.route('/list')
    .get(function (req,res) {
        res.send("get news/list")
    })
    .post(function (req,res) {
        res.send("post news/list")
    })
module.exports=router;