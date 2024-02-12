"use strict";

const calcAverageHumanAge = (ages) => {
  console.log("Original Data is : " + ages);

  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  const excludeAges = humanAges.filter((age) => age > 18);
  console.log(excludeAges);

  // const averageAge = excludeAges.reduce(
  //   (acc, age, i, arr) => acc + age / arr.length,
  //   0
  // );

  const averageAge =
    excludeAges.reduce((acc, age, arr) => acc + age, 0) / excludeAges.length;
  console.log(`Average Age is : ${averageAge}`);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log("-----------------------------");
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
