"use strict";

// console.log(document.querySelector(".message").textContent);
// console.log(
//   (document.querySelector(".message").textContent = "🎉 Correct Answer!")
// );
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").textContent = 23;
// console.log((document.querySelector(".guess").textContent = 23));

// Add Evente Listener Types

// Mouseover: When the mouse is moved over an element.
// Mousemove: Part of the MouseEvent interface, which includes other events like mouseout, click, mouseup, and mousedown.
// Click: A mouse event.
// Dblclick: A mouse event.
// Mousedown: A mouse event.
// Mouseup: A mouse event.
// Contextmenu: A mouse event.
// Mousewheel: A mouse event.

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  }
});
