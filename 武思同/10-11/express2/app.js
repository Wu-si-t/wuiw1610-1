var express=require('express');
var app=express();
//模块化路由
var home=require("./routes/home.js");
var news=require("./routes/news.js");
var product=require("./routes/product.js");
app.use("/",home);
app.use("/news",news);
app.use("/product",product);

var server = app.listen(3000,'localhost',function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})