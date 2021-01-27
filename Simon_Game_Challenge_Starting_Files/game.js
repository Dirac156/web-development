$(document).ready(function(){
    console.log("I there");
});

//game pattern
var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function(){
    //get user clicked button
    var userChosenColour = $(this).attr("id");
    //add that clicked button to the user pattern
    userClickedPattern.push(userChosenColour);
    //console log the user pattern list
    console.log(userClickedPattern);

    playSound(userChosenColour);
});

//color array
var buttonColours = ["red", "blue", "green", "yellow"];

//create new random variable
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    //color selected
    // $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#" + randomChosenColour).animate({
        opacity: 0.5
    }, 100).animate({
            opacity: 1
        },
        100);
    
    playSound(randomChosenColour);
}

function playSound(color) {
    var path = "sounds/" + color + ".mp3";
    var sound_play = new Audio(path);
    sound_play.play();
}
nextSequence();