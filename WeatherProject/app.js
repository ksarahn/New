var express = require("express");
var https = require("https");

var app = exxpress();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html"):

    https.get(url, function(response){
        console.log(respose);

        response.on("data", function(data){
           var Weather = JSON.parse(data);
           var icon = url of api path;
           var url = url 10d repace by icon;
           res.write("coco");
           res.write("coco"),
           res.write("<img src="+ url +">");
           res.send
        })
    })
    app.send("bonjour");
})

app.post("/", function(req, res){

   var city = res.body.name;
   var url= https city replace by city;
   https.get(url, function(response){
        console.log(respose);

        response.on("data", function(data){
           var Weather = JSON.parse(data);
           var icon = url of api path;
           var url = url 10d repace by icon;
           res.write("coco");
           res.write("coco"),
           res.write("<img src="+ url +">");
           res.send
        })
    })
})

app.listen(3000, function(){

})