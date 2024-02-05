"use strict";
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

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
// };
// const { name, location, categories } = restaurant;
// console.log(name, " : ", location, " : ", categories);

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

// const rest1 = {
//   name: "La Milano",
//   // numGuest: 20,
//   numGuest: 0,
// };
// const rest2 = {
//   name: "La Pinoz",
//   owner: "Sunil",
// };

// OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// console.log(rest1);
// console.log(rest2);

// Nullish assignment operator(Null or undefined)
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;
// console.log(rest1);
// console.log(rest2);

// AND assignment operator
// rest1.owner &&= "<Annonymous>";
// rest2.owner &&= "<Annonymous>";
// console.log(rest1);
// console.log(rest2);

// const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const openingHours = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekDays[5]]: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // ES6 Enhanced Object literals
//   // Must be the same variable name
//   openingHours,

//   // Old way to write methods
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // New ES6 way to write methods
//   orderDelivery({ time, address, mainIndex, starterIndex }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient, otherIngredient);
//   },
// };

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon);

// console.log(restaurant.openingHours.mon.open);

/////////////////////////////////////////////////////////
//  With optional chaining( ? )

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of weekDays) {
//   const open = restaurant.openingHours[day]?.open ?? "Closed";
//   console.log(`On ${day} We Open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

// console.log(restaurant.ordeasasasr?.(0, 1) ?? "Method does not exist");

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for of Loop
// for (const item of menu) console.log(item);

// Normal For loop
// for (let i = 0; i < menu.length; i++) console.log(menu[i]);

// for printing index value too
// for (const item of menu.entries()) console.log(item);

// Start index from 1
// for (const item of menu.entries()) console.log(`${item[0] + 1} : ${item[1]}`);

// Start index from 1 but in smarter way
// for (const [i, el] of menu.entries()) console.log(`${i + 1} :  ${el}`);

// const users = [];
// const users = [
//   {
//     name: "Aamir",
//     email: "aamir@gmail.com",
//   },
// ];
// console.log(users[0]?.name ?? "user array empty");

// To get the properties/keys name
// const properties = Object.keys(openingHours);
// let openStr = `Restaurant is open on ${properties.length} days`;

// for (const day of properties) {
//   openStr += ` ${day}, `;
// }
// console.log(openStr);

// To get the properties/keys values
// const values = Object.values(openingHours);
// console.log(values);

// Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

////////////---SETTTTTTT---//////////////////////////////////////////////////

// const orderSet = new Set(["pizza", "pasta", "maggie", "pizza", "pasta"]);
// console.log(orderSet);
// console.log(new Set("Jonas").size);
// console.log(orderSet.has("pizza"));
// console.log(orderSet.has("Pizza"));
// orderSet.add("Garlic Bread", "Garlic Bread");
// orderSet.delete("maggie");
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) {
//   console.log(order);
// }

// const staff = ["chef", "waiter", "manager", "waiter", "chef", "waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(["chef", "waiter", "manager", "waiter", "chef", "waiter"]).size
// );

// // Maps
// const rest = new Map();
// rest.set("Name", "La Pinoz Pizza");
// rest.set(1, "West Bank, Riverfront ");
// console.log(rest.set(2, "Kankaria, Maninagar"));

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 24)
//   .set(true, "We are open :D")
//   .set(false, "We are close :(");
// console.log(rest);
// console.log(rest.get("Name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get("open") ?? time < rest.get("close")));
// console.log(rest.has("categories"));
// rest.delete(2);
// console.log(rest.size);
// // rest.clear();

// // To set the array as a key
// const arr = [1, 2];
// rest.set(arr, "Test");
// console.log(rest.get(arr));

// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);

// const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const openingHours = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekDays[5]]: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // ES6 Enhanced Object literals
//   // Must be the same variable name
//   // openingHours,

//   // Old way to write methods
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // New ES6 way to write methods
//   orderDelivery({ time, address, mainIndex, starterIndex }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient, otherIngredient);
//   },
// };

// const question = new Map([
//   ["question", "What is the best programming langauge in the world ?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct 🎉"],
//   [false, "Try again ⛔"],
// ]);
// console.log(question);

// // Convert object to map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz App
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }
// const answer = Number(prompt("Your Answer...???"));
// console.log(question.get(question.get("correct") === answer));

// // Convert map to an array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Strings
// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(airline.slice(4, 9));
// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("You got the middle seat 😱");
//   else console.log("You got the lucky seat 🥳");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String("Aamir"));

// const passenger = "aAmIr";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
// passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = "aamir@shaikh.io";
// const loggedEmail = "         AaMiR@sHaIkH.\n io";

// const normalizedEmail = loggedEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// Replacing
// const priceGB = "288,97$";
// const priceDoller = priceGB.replace("$", "^").replace(",", ".");
// console.log(priceDoller);

const announcement =
  "All the passangers come to the boarding door 23. Boarding door 23!";
// console.log(announcement.replace(/door/g, "gate"));
// console.log(announcement.replaceAll("door", "gate"));

// Boolean
// console.log(plane.includes("A3"));
// console.log(plane.includes("A31"));
// console.log(announcement.startsWith("All"));

// Split and join

// console.log("a+very+nice+string".split("+"));
// const [firstName, lastName] = "Aamir Shaikh".split(" ");
// console.log(firstName, lastName);
// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const nameUpperCase = [];

//   for (const n of names) {
//     // nameUpperCase.push(n[0].toUpperCase() + n.slice(1));
//     nameUpperCase.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(nameUpperCase.join(" "));
// };

// capitalizeName("aamir sohel shaikh");
// capitalizeName("maksad bhai");
// capitalizeName("suraj pithwa");

// Padding
const message = "go to gate 23";
// console.log(message.padStart(300, announcement));

// const maskCreditCard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };
// console.log(maskCreditCard(10101010192010209));
// console.log(maskCreditCard(12091201992));
// console.log(maskCreditCard(9749832741));
// console.log(maskCreditCard(9212834));

// Repeat
const message2 = "Bad weather... All departures delayed... ";
console.log(message2.repeat(message.length));

const planeInLine = function (n) {
  console.log(`There are ${n} Planes in lines ${"✈".repeat(n)}`);
};
planeInLine(2);
planeInLine(1);
planeInLine(7);
planeInLine(9);
planeInLine(0);
planeInLine(6);
