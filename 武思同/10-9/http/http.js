var http=require('http');
var fs=require('fs');
var server=http.createServer(function (req,res) {
    if(req.url=="/favicon.ico"){
        res.end();
    }
    if(req.url=="/" || req.url=="/index.html"){
        fs.readFile("./index.html",function (err,data) {
            res.setHeader("Content-type","text/html");
            res.write(data);
            res.end();
        })
    }
    if(req.url=='/index.css'){
        fs.readFile("./index.css",function (err,data) {
            res.setHeader("Content-type","text/css");
            res.write(data);
            res.end();
        })
        return;
    }
    if(req.url=='/index.js'){
        fs.readFile("./index.js",function (err,data) {
            res.setHeader("Content-type","text/javascript");
            res.write(data);
            res.end();
        })
        return;
    }

})
server.listen(8000,'localhost',function () {
    console.log("http://"+server.address().address+":"+server.address().port);
});
