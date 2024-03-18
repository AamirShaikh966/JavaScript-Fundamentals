"use strict";

// PRE-LOADER FUNCTIONALITY
window.addEventListener("load", () => {
  document.querySelector("body").classList.add("loaded");
});

let userCart = JSON.parse(localStorage.getItem("userCart"));

if (userCart === null) {
  document.querySelector(".message").textContent = "Your Cart is Empty";
}

const cartProducts = document.querySelector(".cart__products");
const cartSummary = document.querySelector(".summary");
const subTotal = document.querySelector(".sub__total");
const discountPercentage = document.querySelector(".discount__percentage");
const discountValue = document.querySelector(".discount__value");
const deliveryFee = document.querySelector(".delivery__fee");
const grandTotal = document.querySelector(".grand__total");
const placeOrder = document.querySelector(".btncheckout");

const renderProducts = (userCart) => {
  return userCart.map(
    (item) => `
              <div class="col-lg-2 my-3">
                <img
                  src="${item.img}"
                  class="img-fluid rounded-3 cartIMG"
                  alt="Cotton T-shirt"
                />
              </div>
              <div class="col-lg-3">
                <p class="mb-2 cartTitle">${item.title}</p>
                <h5 class="cartPrice">$${(item.price * item.quantity).toFixed(
                  2
                )}</h5>
              </div>
              <div class="col-lg-3 d-flex">
                <button
                  class="quantity__minus"
                  onclick=decrease(${item.id})
                >
                  <i class="fas fa-minus"></i>
                </button>

                <input
                  type="number"
                  value="${item.quantity}"
                  style="width: 25px"
                  class="quantity__field"
                />

                <button
                  class="quantity__plus"
                  onclick=increase(${item.id})
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>

              <div class="col-lg-2 text-end">
                <a href="#" class="text-danger"
                  ><i class="fas fa-trash fa-lg btn__remove" onclick=deleteItem(${
                    item.id
                  })></i
                ></a>
              </div>
              <hr>
  `
  );
};
const displayCartProducts = (userCart) => {
  const html = renderProducts(userCart);
  cartProducts.innerHTML = html;
  if (userCart === null) {
    document.querySelector(".message").textContent = "Your Cart is Empty";
  }
};
displayCartProducts(userCart);

const cartIcon = () => {
  const cartCount = document.querySelector(".badge");
  cartCount.innerHTML = userCart.length;
};
cartIcon();

const deleteItem = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "Arey sure you want to remove this product?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Product has been removed from cart",
        icon: "success",
      });
      const indexOfProduct = userCart.findIndex((item) => item.id == id);
      userCart.splice(indexOfProduct, 1);
      localStorage.setItem("userCart", JSON.stringify(userCart));
      displayCartProducts(userCart);
      displayTotal(userCart);
      cartIcon();
    }
  });
};
const decrease = (id) => {
  const indexOfProduct = userCart.findIndex((item) => item.id == id);
  userCart[indexOfProduct].quantity -= 1;

  localStorage.setItem("userCart", JSON.stringify(userCart));
  displayCartProducts(userCart);
  displayTotal(userCart);
};
const increase = (id) => {
  const indexOfProduct = userCart.findIndex((item) => item.id == id);
  userCart[indexOfProduct].quantity += 1;
  localStorage.setItem("userCart", JSON.stringify(userCart));
  displayCartProducts(userCart);
  displayTotal(userCart);
};
const displayTotal = (userCart) => {
  const prices = userCart.map((item) => item.price);
  const quantity = userCart.map((item) => item.quantity);

  const totalPrice = prices
    .map((price, i) => price * quantity[i])
    .reduce((acc, curr) => acc + curr, 0);

  subTotal.innerHTML = `$${totalPrice.toFixed(2)}`;

  if (totalPrice > 500) {
    discountPercentage.innerHTML = `Discount(-20%)`;
    discountValue.innerHTML = `-${(totalPrice * (20 / 100)).toFixed(2)}`;
    deliveryFee.innerHTML = `Free Delivery`;

    grandTotal.innerHTML = `$${(
      Number(discountValue.textContent) + totalPrice
    ).toFixed(2)}`;
  } else if (totalPrice < 500) {
    discountPercentage.innerHTML = `Discount(-15%)`;
    discountValue.innerHTML = `-${(totalPrice * (15 / 100)).toFixed(2)}`;
    deliveryFee.innerHTML = `$15`;
    grandTotal.innerHTML = `$${(
      Number(discountValue.textContent) +
      totalPrice +
      15
    ).toFixed(2)}`;
  }
};
displayTotal(userCart);

placeOrder.addEventListener("click", (e) => {
  const fullName = "e-Kart by Aamirsohel Shaikh";
  const email_id = "aamirshaikh5473@gmail.com";
  const orderTitles = userCart.map((item) => item.title);
  const message = orderTitles.map((item, i) => `${item}\n`).join("");
  const fullMessage = `Your Orders Are : \n${message}`;

  const params = {
    from_name: fullName,
    email_id: email_id,
    message: fullMessage,
    grand_total: grandTotal.textContent,
  };

  emailjs.send("service_5ikb3le", "template_qs5jegs", params).then(() => {
    Swal.fire({
      title: "Order Placed!",
      text: "Your Order Has Been Successfully Placed!",
      icon: "success",
      allowOutsideClick: false,
    }).then(() => {
      localStorage.removeItem("userCart");
      window.location.reload();
    });
  });
  cartIcon();
});
