"use strict";

// DOM Elements
const products = document.querySelector(".products");
const selectBar = document.querySelector(".select_bar");
const searchBar = document.querySelector("#searchbar");
const prizeBar = document.querySelector(".prizeDropdown");

let allAPIData = [];

// Fetch the API and get the products data
const getProductData = () => {
  fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) => {
      // Store the fetched data in the global variable
      allAPIData = data;

      // Display all products on page load
      displayData(allAPIData);

      // Display the dropdown menu with categories
      dropDownMenu(allAPIData);

      // Set up search functionality
      displaySearchedData(allAPIData);

      // Set up price-wise filtering functionality
      displayPrizewiseData(allAPIData);
    });
};
getProductData();

// Short the long text
const truncateText = (text, limit) => {
  return text.length > limit
    ? text.substring(0, limit).concat(" ...more")
    : text;
};

// Display data
const displayData = (data) => {
  const html = data
    .map(
      (item) => `
      <div class="card col-3">
        <h5 class="card-title pro--title">${truncateText(item.title, 20)}</h5>
        <img class="card-img-top w-50" src="${
          item.image
        }" alt="Card image cap"/>
        <p>${truncateText(item.description, 80)}</p>
        <b><h4 class="card-text">${item.price}$</h4></b>
      </div>`
    )
    .join("");

  products.innerHTML = html;
};

const dropDownMenu = (data) => {
  const categories = [...new Set(data.map((item) => item.category))];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    selectBar.appendChild(option);
  });
};

const displaySearchedData = (data) => {
  searchBar.addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchData)
    );
    displayData(filteredData);
  });
};

const displayPrizewiseData = (data) => {
  prizeBar.addEventListener("change", () => {
    const selectedPrize = prizeBar.value;
    let filteredProducts;

    if (selectedPrize === "below") {
      filteredProducts = data.filter((item) => item.price < 100);
    } else if (selectedPrize === "more") {
      filteredProducts = data.filter((item) => item.price > 100);
    } else {
      filteredProducts = data;
    }

    displayData(filteredProducts);
  });
};

// Dropdown functionality based on categories
const filteringOnCategory = () => {
  const selectedValue = selectBar.value;

  if (selectedValue === "all") {
    getProductData();
  } else {
    fetch(`https://fakestoreapi.com/products/category/${selectedValue}`)
      .then((response) => response.json())
      .then((data) => {
        allAPIData = data;
        displayData(allAPIData);
      });
  }
};
selectBar.addEventListener("change", filteringOnCategory);
