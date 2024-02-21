"use strict";

///////////////////////////////////////

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// Modal window
const openModal = (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Button scrolling
btnScrollTo.addEventListener("click", (e) => {
  // New way
  section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation
document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// document.querySelectorAll(".nav__link").forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();
//     const id = e.target.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Tabbed component
tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  // Remove active class
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu fade animation
const handleHover = (e, opacity) => {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", (e) => {
  handleHover(e, 0.5);
});

nav.addEventListener("mouseout", (e) => {
  handleHover(e, 1);
});

// Sticky navigation: Intersection Observer API
// const obsCallback = (entries, observer) => {};
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };
// const obServer = new IntersectionObserver(obsCallback, obsOptions);
// obServer.observe(section1);
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObeserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObeserver.observe(header);

// Reveal Sections
const allSections = document.querySelectorAll(".section");
const revealSection = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
///////////////////////////////////////////
//////////////////////////////////////////
//          Lecture
/* 
Selecting Elements using

document.documentElement; //This will select the all html elements
document.head; //This will select the head elemets
document.body; //This will select the body elements
document.querySelector;
document.querySelectorAll;
document.getElementById;
document.getElementsByClassName;
document.getElementsByTagName;
// To create and insert the Element using

const header = document.querySelector(".header");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  " We use cokies to improve functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";

// To copy the multiple element to the html page
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message); //Message will be shown before the header
// header.after(message); //Message will be shown after the header

//Delete the element
document.querySelector(".cookie-message").addEventListener("click", () => {
  // message.remove();
  // Another method to delete the element
  message.parentElement.removeChild(message);
});

// Style the element
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

//It will not print anything if height has been styled using inline css
// console.log(message.style.height);

//To print the property values to the console use this method
// console.log(getComputedStyle(message).height);

// We have backgroundcolor property outside inline css that is why it will show the background color to the console
// console.log(message.style.backgroundColor);

// To change the css custom properties
document.documentElement.style.setProperty("--color-primary", "orangered");

//Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// To change the attribute
logo.alt = "Beautiful minimalist LOGO";

// For the non-standard attribute
// logo.getAttribute("attribute name");
// logo.setAttribute("attribute_name", "attribute_value");

const h1 = document.querySelector("h1");
const h1Alert = (e) => {
  alert("Onmouseenter Event Triggered");

  // To prevent the evenlistener triggered after executing once
  h1.removeEventListener("mouseenter", h1Alert);
};
h1.addEventListener("mouseenter", h1Alert);

// h1.onmouseenter = (e) => {
//   alert("Onmouseenter Event Triggred");
// };

// Let's generate random color
const randomInt = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

const navLink = document.querySelector(".nav__link");
navLink.addEventListener("click", (e) => {
  // navLink.style.backgroundColor = randomColor();
  // this will work same
  e.target.style.backgroundColor = randomColor();
});

const navLinks = document.querySelector(".nav__links");
navLinks.addEventListener("click", (e) => {
  navLinks.style.backgroundColor = randomColor();
});

nav.addEventListener("click", (e) => {
  nav.style.backgroundColor = randomColor();
});
*/
