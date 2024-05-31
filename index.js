// need to add event listener on click of all the drums
// document.querySelector("button").addEventListener("click", function() {
//   alert("Click!");
// })

var buttons = document.querySelectorAll(".drum");
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');
var crash = new Audio('sounds/crash.mp3');
var kick = new Audio('sounds/kick-bass.mp3');

// buttons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
//   });
// });

buttons[0].addEventListener("click", function() {
  tom1.play();
});
buttons[1].addEventListener("click", function() {
  tom2.play();
});
buttons[2].addEventListener("click", function() {
  tom3.play();
});
buttons[3].addEventListener("click", function() {
  tom4.play();
});
buttons[4].addEventListener("click", function() {
  snare.play();
});
buttons[5].addEventListener("click", function() {
  crash.play();
});
buttons[6].addEventListener("click", function() {
  kick.play();
});
