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
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

//To disabled the button
// document.querySelector(".check").disabled = true;

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
  //if guess number is in negative or larger than 20
  else if (guess < 0 || guess > 20) {
    displayMessage("Enter number between 0 to 20 ");
  }

  // // if guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈Too High!" : "📉Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥You Lost the Game");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".check").disabled = true;
    }
  }
  // If Guess is correct
  else if (guess === secretNumber) {
    // <!-- -----------------Box-Model Starts------------------- -->
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");

    document.querySelector(".congratsmsg").textContent =
      "Your Number is : " + guess + "\n You guessed the right number";

    btnCloseModal.addEventListener("click", closeModal);

    overlay.addEventListener("click", closeModal);
    // <!-- -----------------Box-Model Ends------------------- -->

    displayMessage("🎉 Correct Answer!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    //For the HighScore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});

//function to show content inside the Box-Model
const showModel = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

//function to hide content inside the Box-Model
const closeModal = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

// To restart the game Function
const restartGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
};
document.querySelector(".again").addEventListener("click", restartGame);
