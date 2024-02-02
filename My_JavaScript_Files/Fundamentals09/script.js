// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);
// const [w, y, x] = arr;
// console.log(w, y, x);

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
// };
// let [main, secondary] = [restaurant.categories[0], restaurant.categories[2]];
// console.log(main, secondary);

// Switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Nested Destructuring
// const nest = [1, 2, 3, [4, 5]];
// const [a, b, , [c, d]] = nest;
// console.log(a, b, c, d);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};
const { name, location, categories } = restaurant;
console.log(name, " : ", location, " : ", categories);

// const {
//   name: restaurantName,
//   location: address,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, " : ", address, " : ", tags);

//Mutating Variables
// let a = 199;
// let b = 1200;
// const obj = { a: 10, b: 20, c: 30 };
// console.log(obj, " : ", a, b);
// ({ a, b } = obj);
// console.log(a, b);

// Receive 2 return value from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Shahalam",
//   mainIndex: 2,
//   starterIndex: 0,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, " : ", hours, " : ", tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, " : ", starters);

// Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// SPREAD operator
// const arr = [1, 2, 3, "Aamir"];
// const newArray = [-2, -1, 0, ...arr];
// console.log(...newArray);
// const newMenu = [...restaurant.mainMenu, "Maggie"];
// console.log(newMenu);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = "Shaikh";
// const letters = [...str, " ", "S."];
// console.log(letters);
// console.log(...str);

// const ingredients = ["cheese", "Butter", "Souce"];
// console.log(...ingredients);
// restaurant.orderPasta(...ingredients);

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
//     // console.log(
//     //   `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     // );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient, otherIngredient);
//   },
// };

// REST Operator

// const [a, b, c, ...other] = [1, 2, 3, 4, 11, 22, 7, 8, 9];
// console.log(a, b, c, other);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// restaurant.orderPizza("mashroom", "cheese", "souce", "butter");
// restaurant.orderPizza("cheeseBurst");

// USE ANY DATA TYPE AND RETURN ANY DATA TYPE

// SHORT CIRCUTTING  :: it will return truthy value not falsy value
// it will return first truthy value
// console.log("-----------------OR-----------------");
// console.log(3 || "Aamir"); //3
// console.log("" || "Aamir"); //'Aamir'
// console.log("true" || 0); //true
// console.log(undefined || null); //null

// it will return first falsy value and if all are true than it will return last truthy value
// console.log("-----------------AND-----------------");
// console.log(null && "Aamir");
// console.log(7 && "Aamir");

// restaurant.numGuest = 0;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

// Nullish value is :null and undefined(NOT 0 or '')
// const correctGuest = restaurant.numGuest ?? 10;
// console.log(correctGuest);

const rest1 = {
  name: "La Milano",
  // numGuest: 20,
  numGuest: 0,
};
const rest2 = {
  name: "La Pinoz",
  owner: "Sunil",
};

// OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// console.log(rest1);
// console.log(rest2);

// Nullish assignment operator(Null or undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
// console.log(rest1);
// console.log(rest2);

// AND assignment operator
rest1.owner &&= "<Annonymous>";
rest2.owner &&= "<Annonymous>";
// console.log(rest1);
// console.log(rest2);
