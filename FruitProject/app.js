const mongoose = require('mongoose');

//connect to database or create new database
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

//create a schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "no name specified"]
    },
    rating: {
        type : Number,
        min: 1, 
        max: 10
    },
    review: String
});

//create a new model
const Fruit = mongoose.model("Fruit", fruitSchema);

// //create a fruit
// const fruit = new Fruit ({
//     name: "Apple",
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });

//save
//fruit.save();

// // create a schema
// const peopleSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// // create a model
// const Person = mongoose.model("Person", peopleSchema);

// //create a new person
// const person = new Person({
//     name: "John",
//     age: 37
// });

//person.save();

// const kiwi = new Fruit ({
//     name: "kiwi",
//     rating: 9,
//     review: "the best ruit."
// });

// const orange = new Fruit ({
//     name: "Orange",
//     rating: 6,
//     review: "nice fruit."
// });

// const banana = new Fruit ({
//     name: "Banana",
//     rating: 8,
//     review: "Pretty solid as a fruit."
// });

// Fruit.insertMany([banana, orange, kiwi], function(err){
//     if (err){
//         console.log("errors");
//     } else {
//         console.log("new fruits");
//     }
// });


Fruit.find(function(err, fruits){
    if (err){
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log("name:", fruit.name);
        });
    };
});