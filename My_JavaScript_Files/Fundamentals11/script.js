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
const eurToUSD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

const totalDepositsUSD = movements
  .filter((mov) => mov < 0)
  .map((mov, i, arr) => {
    // console.log(arr);  // By writing this you can check the array of each iterations
    return mov * eurToUSD;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(Math.trunc(Math.abs(totalDepositsUSD)));

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const account = accounts.find((acc) => acc.owner === "Sarah Smith");
console.log(account);

// Flat method : it can go multiple level deep
const overAllBalalnce = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalalnce);

// Flatmap method which is combination of flat and map method
// this method will not go multiple level deep. to flatten the multiple level deep we need to use flat method
const overAllBalalnce2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalalnce2);

// Sort method
console.log("Original Array");
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log("--------------------------------------------------");

// This kind of sort method will not work if you have mix array like numbers, strings.
console.log("Array in Ascending  order");
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b); // Return a
console.log(movements);
console.log("--------------------------------------------------");

console.log("Array in Descending order");
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

const arr = Array.from({ length: 7 }, () => 1);
console.log(arr);

const z = Array.from({ length: 7 }, (_, index) => index + 1);
console.log(z);

const diceRoll = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(diceRoll);
console.log(diceRoll.length);

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
// console.log(deposits, withdrawals);
*/

const convertTitleCase = (title) => {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "and", "an", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and there is another title with an EXAMPLE"));
