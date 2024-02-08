"use strict";

/*

const createBooking = function (
  flightNumber,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES-5 Way
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 10);
createBooking("LH123", 20);
createBooking("LH123", undefined, 1000);

// createBooking("LH123",, 20);  //We cant do this
// createBooking("LH123", 100, 1040);

const flight = "LH234";
const aamir = {
  name: "Aamir",
  passport: 46532198198716,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 46532198198716) {
    alert("Checked In...!!!");
  } else {
    alert("Wrong Passport...XXX");
  }
};

checkIn(flight, aamir);
console.log(flight);
console.log(aamir);


// First Class Function
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original String : ${str}`);
  console.log(`Transformed String : ${fn(str)}`);
  console.log(`Transformed By (${fn.name}) Function `);
};
transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS Uses Callback function all the time
const high5 = function () {
  console.log("✋⚡👋");
};

document.body.addEventListener("click", high5); // high5 is the callback function and addEventListener is higher level function

const greet = function (greeting) {
  return function (name) {
    console.log(`${name} ${greeting}`);
  };
};

const greeter = greet("Hey...");
greeter("Aamir");

// Same Function using arrow function
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet("Hiii")("Sohail");

const bookings = [];

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} Booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Aamir Shaikh");
lufthansa.book(6969, "Aiman Shaikh");

const euroWings = {
  airline: "Eurowings",
  iataCode: "MA",
  bookings: [],
};
const book = lufthansa.book;

// This Doesn't Work
// book(23, "Sarah Williams");

// CALL Method
book.call(euroWings, 45, "Tony Stark");
book.call(euroWings, 1893, "Bruce Banner");

book.call(lufthansa, 20, "Steve Waugh");

const swiss = {
  airline: "Swiss Air Line",
  iataCode: "SW",
  bookings: [],
};
book.call(swiss, 30, "Chris Heimsworth");

// APPLY Method  :: It will not receive the list of arguments instead it gonna take an array of the arguments ::this method is not used in modern JavaScript

const bookData = [709, "Natasha Cooper"];
book.apply(swiss, bookData);

book.call(lufthansa, ...bookData);

// BIND Method
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(euroWings);
const bookSW = book.bind(swiss);

bookLH(910, "Rohit Sharma");
bookEW(90, "Virat Kohli");
bookSW(920, "KL Rahul");

// We can also pass the value inside bind method
const bookLH9012 = book.bind(lufthansa, 9012);
bookLH9012("Rishabh Pant");
bookLH9012("Manish Pandey");

console.log(lufthansa);
console.log(euroWings);
console.log(swiss);

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlanes.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value * 0.23;
// console.log(addVAT(900));
// console.log(addVAT(12));
// console.log(addVAT(89032));
// console.log(addVAT(9012));
// console.log(addVAT(743075));
// console.log(addVAT(6973));

const addVAT = (rate) => (value) => value + value * rate;
const addVAT2 = addVAT(0.2);
console.log(addVAT2(200));

// Using normal function
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT3 = addTaxRate(0.2);
// console.log(addVAT3(200));

// Immediately Invoked Function Expression :: IIFE
(function () {
  console.log("This will never run again after executing once");
})();

(() => console.log("This will ALSO never run again after executing once"))();
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} Passengers`);
  };
};
const booker = secureBooking();
// booker();
// booker();
// booker();
console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 200;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//Re-assigning f function
h();
f();
*/
const boardPassangers = function (n, wait) {
  const perGrp = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passangers.`);
    console.log(`There are 3 groups each with ${perGrp} passengers.`);
  }, wait * 1000);
  console.log(`We all starting boarding in ${wait} seconds.`);
};

boardPassangers(150, 5);
