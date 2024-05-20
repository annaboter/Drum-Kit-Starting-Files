// need to add event listener on click of all the drums
// document.querySelector("button").addEventListener("click", function() {
//   alert("Click!");
// })

var buttons = document.querySelectorAll(".drum");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var audio = new Audio('sounds/tom-1.mp3');
audio.play();
  });
});
