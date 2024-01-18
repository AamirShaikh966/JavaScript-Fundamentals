"use strict";

// function logger() {
//   console.log("Hello From Aamir : ");
// }
// // Calling / Running / Invoking Function
// logger();

// This is function expression because it generates the value.
// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };
// const age = calcAge(2002);
// console.log(`Age is ${age}`);

//Arrow function
// const calcAge = (birthYear) => 2024 - birthYear;
// const age = calcAge(2002);
// console.log(age);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 60 - age;
//   return `${firstName} is retires in ${retirement} years...!!!`;
// };
// console.log(yearsUntilRetirement(2002, "Aamir"));
// console.log(yearsUntilRetirement(2002, "Suraj"));

// function fruitCutter(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apple, orange) {
//   const applePiece = fruitCutter(apple);
//   const orangePiece = fruitCutter(orange);
//   const juice = `juice with ${applePiece} apples and ${orangePiece} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// Arrow Function
// const ageOfRetirement = (name, birthYear) => {
//   const age = 2024 - birthYear;
//   const retirementYear = 60 - age;
//   return `${name} will retire in ${retirementYear} years ...!!!`;
// };

// const name = prompt("Enter Name...!!!");
// const birthYear = prompt("Enter a birth year ...!!!");

// console.log(ageOfRetirement(name, birthYear));

// const cutFruitPiece = (fruit) => {
//   return fruit * 2;
// };
// const juiceMaker = (apple, banana) => {
//   const applePiece = cutFruitPiece(apple);
//   const bananaPiece = cutFruitPiece(banana);
//   const juice = `Apple juice has been made from ${applePiece} apple pieces and banana juice has been made from ${bananaPiece} pieces...!!!`;
//   return juice;
// };
// console.log(juiceMaker(17, 10));

// function cutFruitPiece(fruit) {
//   return fruit * 4;
// }
// function juiceMaker(apple, banana) {
//   const applePiece = cutFruitPiece(apple);
//   const orangePiece = cutFruitPiece(banana);
//   const juice = `Juice with ${applePiece} apple and ${orangePiece} orange`;
//   return juice;
// }

// console.log(juiceMaker(2, 3));

// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const retirementLeft = function (age) {
//   return 60 - age;
// };

// const yearsUntilRetirement = function (birthYear, name) {
//   const age = calcAge(birthYear);
//   const retirement = retirementLeft(age);
//   if (retirement > 0) {
//     console.log(`${name} has ${retirement} years left to retire...!!!`);
//     return retirement;
//   } else {
//     console.log(`${name} has already been retired🥳`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(2002, "Aamir"));
// console.log(yearsUntilRetirement(1932, "Salim"));

const calcAvg = (a, b, c) => {
  return (a + b + c) / 3;
};

const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins Wins ${avgDolhins} vs ${avgKoalas}.`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas Wins ${avgKoalas} vs ${avgDolhins}.`);
  } else {
    console.log("No Teams winssss...!!!");
    return -1;
  }
};

const avgDolhins = calcAvg(85, 54, 41);
const avgKoalas = calcAvg(23, 34, 27);
console.log(
  `Average of Dolphin is ${avgDolhins}. Average of Koalas is ${avgKoalas}`
);

checkWinner(avgDolhins, avgKoalas);
