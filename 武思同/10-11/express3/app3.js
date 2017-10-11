var express = require('express');
var app=express();

app.use(function (req,res,next) {

    req.money=10000;
    next();
})
app.use(function (req,res,next) {

    req.money=req.money-4000;
    console.log('省里');
    next();
})
app.use(function (req,res,next) {

    req.money=req.money-2000;

    console.log('市里');
    next();

})
app.get('/',function (req,res) {
    res.send(req.money+'')
})
app.listen(3000)

