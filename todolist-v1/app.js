const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded(extended = true));
app.set('view engine', 'ejs');
app.use(express.static("public"));

const items = [];
const workItems = [];

app.get("/", function (req, res) {

    const day = date.myGetDate();

    res.render("lists", {
        listTitle: day,
        newItems: items
    });
});

app.post("/", function (req, res) {
    const new_task = req.body.new_task;

    if (req.body.list === "Work") {
        workItems.push(new_task);
        res.redirect("/work");
    } else {
        items.push(new_task);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("lists", {
        listTitle: "Work",
        newItems: workItems
    });
});

app.listen(3000, function () {
    console.log("ruining");
});