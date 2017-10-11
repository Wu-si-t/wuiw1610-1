var express=require('express');
var fs=require('fs');
var app=express();

app.use(function(req,res,next){ //中间件
    var t=new Date().toLocaleTimeString();
    fs.appendFile('./login.txt',t+'\n',function(err){
        if(err) throw  err;
    })
    next();
})
app.get('/',function(req,res){
    res.send("首页");
})
app.get('/list',function(req,res){
    res.send("首页 列表");
})


var server = app.listen(3000,'localhost',function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('当前地址 http://%s:%s', host, port);
})