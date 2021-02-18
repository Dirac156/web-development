const mongoose = require("mongoose");
const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//database connection

mongoose.connect("mongodb://localhost:27017/wikiDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//create schema

const articleSchema = mongoose.Schema({
    title : String,
    content: String
});

//create model

const Article = mongoose.model("article", articleSchema);

/////////////// Request targeting all articles ////////////////////

app.route("/articles")
.get(function(req, res){
    Article.find({}, function(err, foundArticles){
        if (!err){
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    });
})
.post(function(req, res){

    //create new article
    const newArticle = new Article({
        title : req.body.title,
        content : req.body.content
    });

    newArticle.save(function(err){
        if (!err){
            res.send("sucessfully added a new article.");
        } else {
            res.send(err);
        };
    });
    
})
.delete(function(req, res){
    Article.deleteMany({}, function(err){
        if (!err){
            res.send("successfully deleted all elements");
        } else{
            res.send(err);
        };
    });
});

////////////// request targetting specific article ///////////////////////////

app.route("/articles/:specificArticle")
.get(function(req, res){
    Article.findOne({title : req.params.specificArticle}, function(err, foundArticle){
        if (foundArticle){
            res.send(foundArticle);
        } else {
            res.send("No article found");
        };
    });
})
.put(function(req, res){
    Article.update({title: req.params.specificArticle}, 
        {title: req.body.title, content: req.body.content}, 
        {overwrite: true}, 
        function(err){
            if (!err){
                res.send("updated article successed");
            } else {
                res.send(err);
            };
        });
})
.patch(function(req, res){
    Article.update({title: req.params.specificArticle},
        {$set: req.body},
        function(err){
            if (!err){
                res.send("success");
            } else {
                res.send(err);
            };
        });
})
.delete(function(req, res){
    Article.deleteOne({title: req.params.specificArticle}, 
        function(err){
            if (!err){
                res.send("success deleted");
            } else {
                res.send(err);
            };
        });
});


let port;

if (!process.env.PORT){
    port = 3000;
} else{
    port = process.env.PORT;
}

app.listen(port, function(){
    console.log("app ruining on port " + port);
});

