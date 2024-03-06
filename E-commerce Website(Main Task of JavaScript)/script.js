"use strict";

let productData = [];
const dropDown = document.querySelector(".dropdown-menu");
const limitedProducts = document.querySelector(".limited__products");
const allProducts = document.querySelector(".all__products");

// Short the long text
const truncateText = (text, limit) => {
  return text.length > limit
    ? text.substring(0, limit).concat(" ...more")
    : text;
};

// Create a function to print the stars
const printStars = (rating) => {
  // Create an empty string to store the stars
  let stars = "";

  // Loop through the rating and add a star to the string for each point
  for (let i = 0; i < rating; i++) {
    stars += "⭐";
  }
  // Return the string of stars
  return stars;
};

// Navbar DropDown Menu
const dropDownMenu = (productData) => {
  const categories = [...new Set(productData.map((item) => item.category))];

  categories.map(
    (category) =>
      (dropDown.innerHTML += `<a class="dropdown-item" href="#">${category}</a>`)
  );
};

// Showing the top 4 products
const topRated = () => {
  fetch("https://fakestoreapi.com/products?limit=4")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const html = data
        .map(
          (item) => `
      <div class="card col-3 limitcard">
        <img class="card-img-top limitimg" src="${
          item.image
        }" alt="Card image cap"/>
        <h5 class="card-title pro--title">${truncateText(item.title, 16)}</h5>
        <p>${printStars(item.rating.rate)} ${Math.round(
            item.rating.rate
          )}/5 </p>
        <b><h4 class="card-text">$${item.price}</h4></b>
      </div>`
        )
        .join("");
      limitedProducts.innerHTML = html;
    });
};

const displayProducts = (productData) => {
  const html = productData
    .map(
      (item) => `
      <div class="card col-3 limitcard">
        <img class="card-img-top limitimg" src="${
          item.image
        }" alt="Card image cap"/>
        <h5 class="card-title pro--title">${truncateText(item.title, 14)}</h5>
        <p>${printStars(item.rating.rate)} ${Math.round(
        item.rating.rate
      )}/5 </p>
        <b><h4 class="card-text">$${item.price}</h4></b>
      </div>`
    )
    .join("");
  allProducts.innerHTML = html;
};

const getProductData = () => {
  fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) => {
      productData = data;

      // DropDown Function
      dropDownMenu(productData);

      // Top Rating Function
      topRated();

      // Displaying all the Data
      displayProducts(productData);
    });
};
getProductData();
