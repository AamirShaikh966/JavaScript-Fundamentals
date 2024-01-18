const dolphinScore = (97 + 11 + 101) / 3;
const koalaScore = (10 + 95 + 109) / 3;
console.log(
  `Dolphin's Team Score is ${dolphinScore} and Koala's Team Score is ${koalaScore} : `
);

if (dolphinScore > koalaScore && dolphinScore >= 100) {
  console.log("Dolphins are the Winner : 🏆");
} else if (koalaScore > dolphinScore && koalaScore >= 100) {
  console.log("Koalas are the Winner : 🏆");
} else if (
  dolphinScore === koalaScore &&
  dolphinScore >= 100 &&
  koalaScore >= 100
) {
  console.log("Drawww...!!!😭");
} else {
  console.log("No Team's Wins The Trophy : ");
}
