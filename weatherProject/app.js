const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded(extended = true));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    console.log("Post received");
    const city = req.body.city_name;
    const endPoint = "https://api.openweathermap.org/data/2.5/weather?";
    const units = "metric";
    const appid = "7d55e1a2e4368af513cd77318058fef9";
    const url = endPoint + "q=" + city + "&units=" + units + "&appid=" + appid;
    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
            var weatherData = JSON.parse(data);
            var tmp = weatherData.main.temp;
            var description = weatherData.weather[0].description;
            var icon = weatherData.weather[0].icon;
            var imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<h1>The weather in " + city + " is " + tmp + " celcius</h1>");
            res.write("<img src=" + imageUrl + ">");
            res.send();
        })
    })
});



app.listen(port, () => console.log(`Our app is ruining on port 3000!`))