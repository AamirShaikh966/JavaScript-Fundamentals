"use strict";
const checkDogs = (dogsJulia, dogsKate) => {
  const correctedDogsJulia = dogsJulia.slice(1, 3);
  const dogs = [...correctedDogsJulia, ...dogsKate];

  dogs.forEach((dog, i) => {
    const checkAdult =
      dog >= 3 ? `is an adult and is ${dog} years old` : "is still a puppy 🐶";
    // "Dog number 1 is an adult, and is 5 years old"
    console.log(`Dog number ${i + 1} ${checkAdult}  `);
  });
};
console.log("-----Data 1----");
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

console.log("-----Data 2----");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
