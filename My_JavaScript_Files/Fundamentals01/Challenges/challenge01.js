const massJohn = 85;
const heightJohn = 1.76;
const massMark = 95;
const heightMark = 1.88;

const BMIJohn = massJohn / (heightJohn * heightJohn);
const BMIMark = massMark / heightMark ** 2;
console.log("BMI of John : ", BMIJohn, "BMI of Mark : ", BMIMark);

const markHigherMark =
  BMIJohn > BMIMark ? console.log(true) : console.log(false);
