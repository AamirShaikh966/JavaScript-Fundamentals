"use strict";

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
  console.log(`Tip of bill ${bills[i]} is ${tip}.`);
  totalValue.push(tip + bills[i]);
  console.log(`Total amount = ${totalValue[i]} `);
}
console.log("Here are the tips of each bills", tips);
console.log("Here is the list of total bills : bill + tip ", totalValue);
