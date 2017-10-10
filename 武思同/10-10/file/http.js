var http=require('http');
var fs=require('fs');
var url=require('url');
var path=require('path');
var formidable=require('formidable');

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

    if(u.pathname=='/upload'){
        var from = new formidable.IncomingForm();
        from.parse(req,function(err,fields,files){
            console.log(files);
            fs.existsSync('./upload') || fs.mkdirSync('./upload');
            var d=new Date();
            var date=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
            fs.existsSync('./upload/'+date) || fs.mkdirSync('./upload/'+date);
            var filename=d.getTime()+Math.floor(Math.random()*1000)+path.extname(files.big.name)
            var road='/upload/'+date+'/'+filename;
            fs.readFile(files.big.path,function (err,data) {
                fs.writeFile('.'+road,data,function (err) {
                    res.end(road);
                })
            })
        })
        return;
    }
    if(fs.existsSync('.'+u.pathname)){
        fs.readFile('.'+u.pathname,function (err,data) {
            res.end(data);
        })

    }
}).listen(8000);