"use strict";

// PRE-LOADER FUNCTIONALITY
window.addEventListener("load", () => {
  document.querySelector("body").classList.add("loaded");
});

let productData = [];
const limitedProducts = document.querySelector(".limited__products");
const allProducts = document.querySelector(".all__products");

const prizeBar = document.querySelector(".prizeDropdown");
const searchBar = document.querySelector("#searchbar");
const categoryBar = document.querySelector(".select_bar");

const btnFilter = document.querySelector(".filter__button");

// If user is on index.html page then below conditions and functions going to be executed
if (document.URL.includes("index.html")) {
  fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) => {
      productData = data;

      // Display all the Product
      const html = renderingHTML(productData);
      allProducts.innerHTML = html;

      // Top Rating Function
      topRated();

      // Smooth Scrolling
      scrolling();

      // Animated Numbers
      numberAnimation();

      // Updating Numbers in Cart Icon
      cartIcon();
    });
}
// Showing the top 4 products
const topRated = () => {
  fetch("https://fakestoreapi.com/products?limit=4")
    .then((response) => response.json())
    .then((data) => {
      const html = renderingHTML(data);
      limitedProducts.innerHTML = html;
      cartIcon();
    });
};
// Scrolling
const scrolling = () => {
  document.querySelector(".navlinks").addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
};
// Numbers in Animation
const numberAnimation = () => {
  const counters = document.querySelectorAll(".number__value");
  const speed = 700;

  counters.forEach((counter) => {
    const animate = () => {
      const value = +counter.getAttribute("akhi");
      const data = +counter.innerText;

      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      } else {
        counter.innerText = value;
      }
    };
    animate();
  });
};
// If user is on productPage.html page then below conditions and functions going to be executed
if (document.URL.includes("productPage.html")) {
  fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) => {
      productData = data;

      // DropDown Function
      dropDownMenu(productData);

      // // Display all the Product
      const html = renderingHTML(productData);
      allProducts.innerHTML = html;

      // Search Functionality
      displaySearchedData(productData);

      // Filtering Functionality
      filtering(productData);

      // Updating Numbers in Cart Icon
      cartIcon();
    });
}
const cartIcon = () => {
  const cartCount = document.querySelector(".badge");
  cartCount.innerHTML = userCart.length;
};
// Navbar DropDown Menu
const dropDownMenu = (productData) => {
  const categories = [...new Set(productData.map((item) => item.category))];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryBar.appendChild(option);
  });
};
// Display Searched Data
const displaySearchedData = (productData) => {
  searchBar.addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = productData.filter((item) =>
      item.title.toLowerCase().includes(searchData)
    );
    console.log(filteredData);
    // if(filteredData)
    const html = renderingHTML(filteredData);
    allProducts.innerHTML = html;

    cartIcon();
  });
};
// Filtering Function
const filtering = (productData) => {
  btnFilter.addEventListener("click", () => {
    // store the category in a variable
    const selectedCategory = categoryBar.value;
    // store the price in a variable
    const selectedPrize = prizeBar.value;
    // Store all the Categories in an Array
    const categories = [...new Set(productData.map((item) => item.category))];

    // Conditions of filtering
    if (categories.includes(selectedCategory) && selectedPrize === "all") {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => {
          const html = renderingHTML(data);
          allProducts.innerHTML = html;

          cartIcon();

          displaySearchedData(data);
        });
    } else if (
      categories.includes(selectedCategory) &&
      selectedPrize === "below"
    ) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => {
          let filteredProducts;
          filteredProducts = data.filter((item) => item.price < 100);
          const html = renderingHTML(filteredProducts);
          allProducts.innerHTML = html;
          cartIcon();
          displaySearchedData(filteredProducts);
        });
    } else if (
      categories.includes(selectedCategory) &&
      selectedPrize === "more"
    ) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => {
          let filteredProducts;
          filteredProducts = data.filter((item) => item.price > 100);
          const html = renderingHTML(filteredProducts);
          allProducts.innerHTML = html;
          cartIcon();
          displaySearchedData(filteredProducts);
        });
    } else if (
      !categories.includes(selectedCategory) &&
      selectedPrize === "all"
    ) {
      const html = renderingHTML(productData);
      allProducts.innerHTML = html;
      cartIcon();
      displaySearchedData(productData);
    } else if (
      !categories.includes(selectedCategory) &&
      selectedPrize === "below"
    ) {
      let filteredProducts;
      filteredProducts = productData.filter((item) => item.price < 100);

      const html = renderingHTML(filteredProducts);
      allProducts.innerHTML = html;
      cartIcon();
      displaySearchedData(filteredProducts);
    } else if (
      !categories.includes(selectedCategory) &&
      selectedPrize === "more"
    ) {
      let filteredProducts;
      filteredProducts = productData.filter((item) => item.price > 100);
      const html = renderingHTML(filteredProducts);
      allProducts.innerHTML = html;

      cartIcon();

      displaySearchedData(filteredProducts);
    }
  });
};
// Rendering HTML Function
const renderingHTML = (productData) => {
  return productData
    .map(
      (item) => `
<div class="card col-md-4 col-lg-3 col-sm-6 limitcard mb-4">

  <img class="card-img-top limitimg" src="${
    item.image
  }" alt="Card image cap" onclick="openModal(${item.id})"/>

  <p hidden>${item.id}</p>
  <h5 class="card-title pro--title">${truncateText(item.title, 19)}</h5>
  <p>${printStars(item.rating.rate)} ${Math.round(item.rating.rate)}/5</p>
  <b><h4 class="card-text mb-2">$${item.price}</h4></b>

  <button type="button" class="descriptive__button" onclick="openModal(${
    item.id
  })">
    View More
  </button>

</div>`
    )
    .join("");
};
// Short the long text
const truncateText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit).concat(" ...") : text;
};
// Create a function to print the stars
const printStars = (rating) => {
  let stars = "";
  for (let i = 0; i < rating; i++) stars += "⭐";
  return stars;
};
// Modal Functionality
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".descriptive__button");
const closeModalBtn = document.querySelector(".btn-close");
const btnCart = document.querySelector(".btn-cart");

const openModal = (id) => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  const modalImage = document.querySelector("#proIMG");
  const modalTitle = document.querySelector("#proTitle");
  const modalDesc = document.querySelector("#proDesc");
  const modalPrice = document.querySelector("#proPrice");
  const modalID = document.querySelector("#proID");

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      modalImage.src = data.image;
      modalTitle.innerHTML = data.title;
      modalDesc.innerHTML = data.description;
      modalPrice.innerHTML = `$${data.price}`;
      modalID.value = data.id;
    });
};
let userCart = JSON.parse(localStorage.getItem("userCart")) || [];

const addToCart = () => {
  const id = document.querySelector("#proID").value;
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      let proData = {
        id: data.id,
        img: data.image,
        title: data.title,
        price: data.price,
        quantity: 1,
      };

      // Incresing quantity, if same product is available in localstorage
      let indexOfSameProduct = userCart.findIndex(
        (item) => item.id == proData.id
      );
      if (indexOfSameProduct >= 0) {
        userCart[indexOfSameProduct].quantity += 1;
        localStorage.setItem("userCart", JSON.stringify(userCart));
      } else {
        userCart.push(proData);
        localStorage.setItem("userCart", JSON.stringify(userCart));
      }
      Swal.fire({
        title: "Prooduct Added to Your Cart",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      }).then(() => cartIcon());
      // cartIcon();
    });
};
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
