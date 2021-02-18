const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded(extended = true));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    res.send("The result for the calculation is " + (num1 + num2));
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmi_calculator.html");
});

app.post("/bmicalculator", function(req, res){
   var mass = parseFloat(req.body.mass);
   var heigth = parseFloat(req.body.heigth);
   var result = mass / (heigth * heigth);
   res.send("Your BMI is " + result);
});

app.listen(3000, function(){
    console.log("server ruining on port 3000");
});