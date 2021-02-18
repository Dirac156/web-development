//jshint esversion:6
const express = require("express");
const app = express(); 

app.get("/", function(request, response){
    //console.log(request);
    response.send("<h1>Hello world</h1>");
});

app.get("/contact", function(req, res){
    res.send("<p>my contact is: <em>diracm8@gmail.com</em></p>");
});

app.get("/about", function(req, res){
    res.send("<p>I am a <strong>fullstack</strong> web developer</p>");
});

app.get("/hobbies", function(req, res){
    res.send("<p>I like coding</p>");
});

app.listen(3000, function(){
    console.log("server has started on port 3000");
});

