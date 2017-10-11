var express=require('express');
var app=express();

app.use(function (req,res,next) {
    console.log("1111")
    next();
})

app.get('/',function(req,res){
    res.send("首页")
})
app.get('/list',function(req,res){
    res.send("列表")
})
app.get('/show',function(req,res){
    res.send("详情")
})