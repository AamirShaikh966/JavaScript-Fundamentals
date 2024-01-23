// MAP - FILTER - REDUCE

// map()
console.log("--------Map()--------");

const users = [
  { firstName: "Aamir", lastName: "Shaikh", age: 21 },
  { firstName: "Suraj", lastName: "Pithwa", age: 22 },
  { firstName: "Muskan", lastName: "Shaikh", age: 39 },
  { firstName: "Almas", lastName: "Shaikh", age: 79 },
  { firstName: "Anisha", lastName: "Ratwani", age: 21 },
];
const userName = users.map((x) => x.firstName + " " + x.lastName);
console.log(userName);

const numbers = [1, 3, 4, 6, 7, 8, 9, 0];
// console.log(
//   numbers.map((x) => {
//     return x * 2;
//   })
// );
// console.log(
//   numbers.map((x) => {
//     return x * 3;
//   })
// );
// console.log(
//   numbers.map((x) => {
//     return x.toString(2);
//   })
// );

// filter()
console.log("--------Filter()--------");

const oldFnameFilter = users.filter((x) => x.age > 30).map((x) => x.firstName);
console.log(oldFnameFilter);

// const numbers = [1, 3, 4, 6, 7, 8, 9, 0];
// console.log(
//   numbers.filter((x) => {
//     return x % 2;
//   })
// );

// console.log(
//   numbers.filter((x) => {
//     return x % 2 === 0;
//   })
// );
// console.log(
//   numbers.filter((x) => {
//     return x > 4;
//   })
// );

// reduce()
console.log("--------Reduce()--------");

const oldFnameReduce = users.reduce((acc, curr) => {
  if (curr.age > 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(oldFnameReduce);

const ageCount = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(ageCount);

// const numbers = [1, 3, 4, 6, 7, 8, 9, 0];

// console.log(
//   numbers.reduce((acc, curr) => {
//     acc = acc + curr;
//     return acc;
//   }, 0)
// );

// console.log(
//   numbers.reduce((max, curr) => {
//     if (max < curr) {
//       max = curr;
//     }
//     return max;
//   }, 0)
// );
