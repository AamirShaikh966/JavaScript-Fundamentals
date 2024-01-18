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

// const calcAvg = (a, b, c) => {
//   return (a + b + c) / 3;
// };

// const checkWinner = (avgDolhins, avgKoalas) => {
//   if (avgDolhins >= 2 * avgKoalas) {
//     console.log(`Dolphins Wins ${avgDolhins} vs ${avgKoalas}.`);
//   } else if (avgKoalas >= 2 * avgDolhins) {
//     console.log(`Koalas Wins ${avgKoalas} vs ${avgDolhins}.`);
//   } else {
//     console.log("No Teams winssss...!!!");
//     return -1;
//   }
// };

// const avgDolhins = calcAvg(85, 54, 41);
// const avgKoalas = calcAvg(23, 34, 27);
// console.log(
//   `Average of Dolphin is ${avgDolhins}. Average of Koalas is ${avgKoalas}`
// );

// checkWinner(avgDolhins, avgKoalas);

//Array

// const friends = ["Tony", "Peter", "Thor"];
// const years = new Array(2001, 2002);
// console.log(friends[friends.length - 1]);
// console.log(years);

// friends[3] = "Steve";
// console.log(friends);

// const calcAge = function (year) {
//   const age = 2024 - year;
//   return age;
// };
// let age = [];
// const years = [1998, 2002, 1976, 2006, 2012, 1969, 1999];
// for (let i = 0; i < years.length; i++) {
//   const ages = calcAge(years[i]);
//   age.push(ages);
// }
// console.log(age);
// console.log(age.length);

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     bill = bill * 0.15;
//     return bill;
//   } else {
//     bill = bill * 0.2;
//     return bill;
//   }
// }
// const bills = [100, 125, 555, 44];
// let tips = [];
// let totalValue = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   console.log(`Tip of bill ${bills[i]} is ${tip}.`);
//   totalValue.push(tip + bills[i]);
//   console.log(`Total amount = ${totalValue[i]} `);
// }
// console.log("Here are the tips of each bills", tips);
// console.log("Here is the list of total bills : bill + tip ", totalValue);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 2002,
//   job: "Teacher",
//   friends: ["Tony", "Stark", "Steve"],
//   hasDriverLicense: false,

// calcAge: function (birthYear) {
//   return 2024 - birthYear;
// },

// calcAge: function () {
//   console.log(this);
//   return 2024 - this.birthYear;
// },

// calcAge: function () {
//   this.age = 2024 - this.birthYear;
//   return this.age;
// },

// getSummary: function () {
//   return `${this.firstName} is a  ${this.calcAge()}-years old ${
//     this.job
//   }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
// },
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas["calcAge"](2002));
// console.log(jonas.getSummary());

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 2002,
//   job: "Teacher",
//   friends: ["Tony", "Stark", "Steve"],
// };
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[1]}.`
// );

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 920,
//   height: 1.95,

//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// console.log(`Mark's BMI is ${mark.calcBMI()}`);
// console.log(`John's BMI is ${john.calcBMI()}`);

// if (mark.calcBMI > john.calcBMI) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//       john.fullName
//     }'s BMI (${john.calcBMI()})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//       john.fullName
//     }'s BMI (${mark.calcBMI()})`
//   );
// }

// console.log(
//   `${
//     mark.calcBMI() > john.calcBMI()
//       ? console.log(
//           `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//             john.fullName
//           }'s BMI (${john.calcBMI()})`
//         )
//       : console.log(
//           `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//             john.fullName
//           }'s BMI (${mark.calcBMI()})`
//         )
//   }`
// );

// for (let i = 0; i <= 10; i++) {
//   if (i == 5) continue;
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i == 5) break;
//   console.log(i);
// }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2002,
//   "Teacher",
//   ["Tony", "Stark", "Steve"],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(`Hello From For Loop ${i}`);
// }

// let rep = 1;
// while (rep <= 5) {
//   console.log(`Hello From While Loop ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 5) + 1;
// while (dice !== 5) {
//   console.log(`You rolled a dice ${dice} : `);
//   dice = Math.trunc(Math.random() * 5) + 1;
// }

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    bill = bill * 0.15;
    return bill;
  } else {
    bill = bill * 0.2;
    return bill;
  }
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totalValue = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  // console.log(`Tip of bill ${bills[i]} is ${tip}.`);
  totalValue.push(tip + bills[i]);
  // console.log(`Total amount = ${totalValue[i]} `);
}
console.log("Here are each bills : ", bills);
console.log("Here are the tips of each bills : ", tips);
console.log("Here is the list of total bills : bill + tip ", totalValue);

const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log("Bills Average : ", calcAvg(bills));
console.log("Tips Average : ", calcAvg(tips));
console.log("Total Bills Average : ", calcAvg(totalValue));
