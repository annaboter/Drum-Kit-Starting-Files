var buttons = document.querySelectorAll(".drum");
var sounds = [
  new Audio("sounds/tom-1.mp3"),
  new Audio("sounds/tom-2.mp3"),
  new Audio("sounds/tom-3.mp3"),
  new Audio("sounds/tom-4.mp3"),
  new Audio("sounds/snare.mp3"),
  new Audio("sounds/crash.mp3"),
  new Audio("sounds/kick-bass.mp3")
];

// Play sound on button click
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    buttons[i].classList.add("pressed");
    playSound(this.innerHTML);
    setTimeout(function() {
      buttons[i].classList.remove("pressed");
    }, 200);
  });
};

// Play sound on keypress
document.addEventListener("keydown", function (event) {
  document.querySelector("." + event.key).classList.add("pressed");
  playSound(event.key);
  setTimeout(function () {
    document.querySelector("." + event.key).classList.remove("pressed");
  }, 200);
});

// Function where either button click or keypress parameter is passed for sound
function playSound(key) {
  switch (key) {
    case "w":
      sounds[0].currentTime = 0;
      sounds[0].play();
      break;
    case "a":
      sounds[1].currentTime = 0;
      sounds[1].play();
      break;
    case "s":
      sounds[2].currentTime = 0;
      sounds[2].play();
      break;
    case "d":
      sounds[3].currentTime = 0;
      sounds[3].play();
      break;
    case "j":
      sounds[4].currentTime = 0;
      sounds[4].play();
      break;
    case "k":
      sounds[5].currentTime = 0;
      sounds[5].play();
      break;
    case "l":
      sounds[6].currentTime = 0;
      sounds[6].play();
      break;
  };
};

// AI button
document.querySelector(".ai").addEventListener("click", function (){
  for (let i = 0; i < 4; i++) {
    setTimeout(function() {
      buttons[Math.floor(Math.random() * buttons.length)].click();
    }, 500 * i);
  };
});
