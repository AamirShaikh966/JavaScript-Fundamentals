"use strict";
let productData = [];

const allProducts = document.querySelector(".all__products");
const getProductData = () => {
  fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      productData = data;

      // Display all The Products
      displayProducts(productData);
    });
};
getProductData();

// Short the long text
const truncateText = (text, limit) => {
  return text.length > limit
    ? text.substring(0, limit).concat(" ...more")
    : text;
};

const displayProducts = (productData) => {
  console.log(productData);
  const html = productData
    .map(
      (item) => `
        <div class="card col-3 limitcard">
        <img class="card-img-top limitimg" src="${
          item.image
        }" alt="Card image cap"/>
        <h5 class="card-title pro--title">${truncateText(item.title, 16)}</h5>
        <p>⭐⭐⭐⭐(4/5)
        <b><h4 class="card-text">$${item.price}</h4></b>
      </div>`
    )
    .join("");
  allProducts.innerHTML = html;
};

// const products = document.querySelector(".products");
// const singleProduct = document.querySelector(".single__product");

// // Short the long text
// const truncateText = (text, limit) => {
//   return text.length > limit
//     ? text.substring(0, limit).concat(" ...more")
//     : text;
// };

// const displayProduct = (productData) => {
//   //   console.log(productData);

//   const html = productData
//     .map(
//       (item) => `
//         <div class="card col-3 ">
//             <img class="card-img-top w-50" src="${
//               item.image
//             }" alt="Card image cap"/>
//             <h5 class="card-title pro--title">${truncateText(
//               item.title,
//               20
//             )}</h5>
//             <p>⭐⭐⭐⭐</p>
//             <b><h4 class="card-text">$${item.price}</h4></b>
//         </div>`
//     )
//     .join("");
//   products.innerHTML = html;
// };

// singleProduct.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(productData);
// });

// const getProductData = () => {
//   fetch(`https://fakestoreapi.com/products`)
//     .then((response) => response.json())
//     .then((data) => {
//       //   Got the api data and store it in to the productData
//       productData = data;

//       //   Pass the data in to the display function
//       displayProduct(productData);
//     });
// };
// getProductData();
// //  Discriptioning the Product
// //  detailedDiscription(productData);
