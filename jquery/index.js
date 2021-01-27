$("h1").before("<button>I am before</button>");
$("h1").after("<button>I am after</button>");

$("h1").addClass("big-heading margin-50");
$("h1").click(function() {
    $("h1").css("color", "purple");
})

$("button").click(function() {
    $("h1").css("color", "purple");
})
setTimeout(function(){
    //$("h1").removeClass("big-heading");
    $("h1").text("Bye");
    $("button").html("<strong>You have to click me</strong>");
    $("a").attr("href", "https://www.google.com");
}, 5000);

$(document).keydown(function (e) { 
    $("h1").html(e.key);    
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});

$("h1").on("mouseleave", function(){
    $("h1").css("color", "yellow");
})

