
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded(extended = true));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmi_calculator.html");
});

app.post("/", function (req, res) { 
    var mass = Number(req.body.mass);
    var heigth = Number(req.body.heigth);
    var result = Math.floor(mass / (heigth * heigth));

    res.send("Your BMI is " + result);
 });

 app.listen(3000, function(){
     console.log("Server ruining on port 3000");
 })