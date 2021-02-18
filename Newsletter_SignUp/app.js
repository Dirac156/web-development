const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded(extended = true));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    var data = {
        members: [
            {
                email_address: email,
                status : "subscribed",
                merge_fields : {
                    FNAME: first_name,
                    LNAME: last_name
                }
            }
        ]
    };
    var jsonData = JSON.stringify(data);

    const url = "https://us7.api.mailchimp.com/3.0/lists/1ce51515d4";
    const options = {
        method: "POST",
        auth: "dirac156:fb09e5d9f13765b2299d478e9ad61ef7-us7"
    }

    const request = https.request(url, options, function(response){
        console.log("status code : " + response.statusCode);
        if (response.statusCode === 200){
            res.sendFile(__dirname + "/successfull.html");
        }
        else {
            res.sendFile(__dirname + "/faillure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
        
    });

    request.write(jsonData);
    request.end();

    
    
})

app.listen(process.env.PORT || 3000, function(){
    console.log("port ruining on port 3000");
});

app.post("/faillure", function(req, res){
    res.redirect("/");
});


// API Key
// fb09e5d9f13765b2299d478e9ad61ef7-us7

// List Id
// 1ce51515d4