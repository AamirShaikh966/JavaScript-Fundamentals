"use strict";

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;

// // This how above function works
// const randomInt2 = (min, max) => Math.floor(0.52 * (max - min) + 1) + min;

// console.log(randomInt(10, 20));

// console.log((2.456).toFixed(2)); //This will return string
// console.log(Number((2.456).toFixed(2))); //This will return number

// const a = 2.123123;
// const PI = 3.1415;
// console.log(a);

// console.log(2 ** 69 + 99999999999999999999);
// console.log(Number.MAX_SAFE_INTEGER);
// const b =
//   1892794381748451098451984578346532745693487523456347564987563576394857698756873441n;
// const c =
//   1919238198718471984149179817391891871983278734173487123487394827349823749283749284n;
// console.log(c + b);
// const now = new Date();
// console.log(now);
// console.log(new Date("7 feb 2033"));

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days = calcDaysPassed(new Date(2024, 3, 4), new Date(2024, 3, 31));
// console.log(days);
const locale = navigator.language;
// console.log(locale);

// setTimeout
// setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}🍕`),
//   5 * 1000,
//   "cheese",
//   "chicken"
// );

// setInterval
// setInterval(() => {
//   const now = new Date();
//   console.log(now);
// }, 2000);
