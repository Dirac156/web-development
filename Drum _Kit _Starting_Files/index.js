// document.querySelector("button").addEventListener("click", handleClick);

var lst = document.querySelectorAll(".drum");
for (var i = 0; i < lst.length; i++){
    lst[i].addEventListener("click", function(){
        alert("I got clicked");
    });
}
