"use strict";
const calcAvg = (a, b, c) => {
  return (a + b + c) / 3;
};

const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins Wins ${avgDolhins} vs ${avgKoalas}.`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas Wins ${avgKoalas} vs ${avgDolhins}.`);
  } else {
    console.log("Drawww...!!!");
    return -1;
  }
};

const avgDolhins = calcAvg(85, 54, 41);
const avgKoalas = calcAvg(23, 34, 27);
console.log(
  `Average of Dolphin is ${avgDolhins}. Average of Koalas is ${avgKoalas}`
);

checkWinner(avgDolhins, avgKoalas);
