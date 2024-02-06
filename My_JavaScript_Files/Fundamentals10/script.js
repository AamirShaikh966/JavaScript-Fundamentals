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
*/
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

console.log(lufthansa);
console.log(euroWings);
console.log(swiss);
