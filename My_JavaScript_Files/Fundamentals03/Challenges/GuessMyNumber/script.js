"use strict";

// Add Evente Listener Types

// Mouseover: When the mouse is moved over an element.
// Mousemove: Part of the MouseEvent interface, which includes other events like mouseout, click, mouseup, and mousedown.
// Click: A mouse event.
// Dblclick: A mouse event.
// Mousedown: A mouse event.
// Mouseup: A mouse event.
// Contextmenu: A mouse event.
// Mousewheel: A mouse event.

let score = 20;
let highScore = 0;
let secretNumber = Math.round(Math.random() * 20) + 1;

//to display message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Guess the number
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log("Hello");
  // If input field is empty
  if (!guess) {
    displayMessage("⛔ No Number!");
  }

  // If Guess is correct
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct Answer!");
    document.querySelector("body").style.backgroundColor = "#60b347";

    //For the HighScore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // if guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈Too High!" : "📉Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    }

    //if score is become zero
    else {
      displayMessage("💥You Lost the Game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// To restart the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
