"use strict";

const btnsOpenModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//function to show content
const showModel = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

//funtion to hide content
const closeModal = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", showModel);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
