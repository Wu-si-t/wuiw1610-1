var express=require('express');
var app=express();

//路由路径
app.get("/ab?c",function (req,res) {//访问/abc或/ab都可以
    res.send("访问成功")
})

app.get("/hc+d",function (req,res) {//访问/hcd或/hcc..cd(c最少一个，最多不限制)都可以
    res.send("/hc+d")
})

app.get("/q*d",function (req,res) {//访问/qd或/q123d(中间是任意字符)都可以
    res.send("/q*d")
})


//路由句柄(回调函数)
app.get("/",function(req,res,next){//需要next来执行下一个回调函数,只有最后一个不需要next
    console.log('第一个函数')
    next();
},function(req,res,next){//需要next来执行下一个回调函数,只有最后一个不需要next
    console.log('第二个函数')
    next();
},function (req,res) {
    console.log('第三个函数')
    res.send("多个回调")
})


//数组方式处理路由句柄
var a1 = function (req, res, next) {
    console.log('a1');
    next();
}
var a2 = function (req, res, next) {
    console.log('a2');
    next();
}
var a3 = function (req, res) {
    res.send('数组方式');
}
app.get('/one', [a1, a2, a3]);


//混合方式处理路由句柄
var b1 = function (req, res, next) {
    console.log('b1');
    next();
}

var b2 = function (req, res, next) {
    console.log('b2');
    next();
}

app.get('/two', [b1, b2], function (req, res, next) {
    console.log('b1+b2')
    next();
}, function (req, res) {
    res.send('混合方式');
});

var server = app.listen(3000,'localhost',function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})