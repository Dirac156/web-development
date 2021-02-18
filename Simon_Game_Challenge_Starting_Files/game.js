
//game pattern
var gamePattern = [];

var userClickedPattern = [];

var keyP = true;

var level = 0;

$(".btn").click(function(){
    //get user clicked button
    var userChosenColour = $(this).attr("id");
    //add that clicked button to the user pattern
    userClickedPattern.push(userChosenColour);
    //console log the user pattern list
    console.log(userClickedPattern);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function startOver(){
    keyP = true;
    level = 0;
    gamePattern = [];
}

function checkAnswer(currentLevel) { 
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").html("Game Over, Press Any Key to Restart");
        startOver();
    };
}

//color array
var buttonColours = ["red", "blue", "green", "yellow"];

//create new random variable
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber];

    //increment level
    level++;
    $("#level-title").html("level " + level);
    //reset user clicked pattern to empty
    userClickedPattern = [];

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

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


$(document).keydown(function () {
    if (keyP){
        nextSequence();
        keyP = false;
    };
    
});
