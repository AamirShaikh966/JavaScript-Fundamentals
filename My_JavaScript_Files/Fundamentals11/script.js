"use strict";

/*
/////////////////////////////////////////////////
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));


///////////////////////////////////////
// The new at Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Loop through movements array using for of
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
  }
}
console.log("----forEach----");
//Loop through movements array using forEach
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} : You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(mov)}`);
  }
});
// You cant use break and continue statements in for Each loop ...this is the main difference between for and forEach loop

// MAP
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// SET
const currenciesUnique = new Set(["USD", "EUR", "GBP"]);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} : ${value}`);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;
const movementsUSD = movements.map((mov) => mov * eurToUSD);
console.log(movements);
console.log(movementsUSD);

// Same thing using ForOf loop
const movementsUSDFor = [];
for (const mov of movements) {
  movementsUSDFor.push(mov * eurToUSD);
}

console.log(movementsUSDFor);

const movementDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? "Deposited" : "Withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementDescription.join("\n"));

// FILTER
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const deposit = movements.filter((mov) => mov > 0);
console.log(deposit);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

// REDUCE
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// const balance = movements.reduce((acc, curr, i) => {
//   console.log(`Iteration ${i} : Acc is ${acc} = ${curr} + ${acc}`);
//   return acc + curr;
// }, 0);
// console.log(`Total of Movements is ${balance}`);

const maximum = movements.reduce((acc, curr) => {
  return acc > curr ? `${acc}` : `${curr}`;
}, 0);
console.log(maximum);
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
