var express=require('express')
var app=express();
app.set('views', './view');
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('index', { title:"测试",description:"<b>hello</b>",data:'yoo'});
});
app.listen(3000);