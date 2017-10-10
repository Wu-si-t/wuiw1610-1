var http=require('http');
var fs=require('fs');
var url=require('url');
var qs=require('querystring');
var arr=[];
http.createServer(function (req,res) {
    var u=url.parse(req.url);

    if(u.pathname=='/favicon.ico'){
        res.end();
        return;
    }
    if(u.pathname=='/index.html' || u.pathname=='/'){
        fs.readFile('./index.html',function (err,data) {
            res.setHeader('Content-type','text/html;charset=utf-8');
            res.write(data.toString());
            res.end();
        })
        return;
    }
    if(u.pathname=="/login"){
        var data="";
        var q = qs.parse(url.query);
        res.setHeader("Content-type","text/plain;charset=utf-8");
        req.on("data",function(d){
            data+=d;
        })
        req.on("end",function(){
            arr.push(qs.parse(data));
            console.log(arr);
        })
    }
}).listen(8000);