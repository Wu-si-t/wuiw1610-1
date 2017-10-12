
var render=function(tpl,data){
    tpl.replace(/\{\{(\w+)\}\}/g,function(){
        // console.log()
        return data[arguments[1]];
    })
}

var content="<div><h2>{{title}}</h2><p>{{description}}</p></div>";

var data=[
    {
        title:"概念",
        description:"洛杉矶到了房间里上课"
    },
    {
        title:"概念2",
        description:"洛杉矶到了房间里上课2"
    }
]



data.forEach(function(content,data){
    console.log(content,data)
})
