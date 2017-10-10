var http=require('http');
var server=http.createServer(function (req,res) {
    // req request 请求
    // res response 响应
    // res.end('hello');
    var date=new Date();
    var aa=date.toString();
    res.setHeader("Content-type","text/plain;charset=utf-8");
    res.write(aa);
    res.end();//告诉客户端响应完成，结束响应
})
server.listen(8000,'localhost',function () {
    console.log("http://"+server.address().address+":"+server.address().port);
});
