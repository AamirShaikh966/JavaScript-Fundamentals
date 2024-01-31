const audioA = new Audio("./assets/sounds/clap.wav");
const audioS = new Audio("./assets/sounds/hihat.wav");
const audioD = new Audio("./assets/sounds/kick.wav");
const audioF = new Audio("./assets/sounds/openhat.wav");
const audioG = new Audio("./assets/sounds/boom.wav");
const audioH = new Audio("./assets/sounds/ride.wav");
const audioJ = new Audio("./assets/sounds/snare.wav");
const audioK = new Audio("./assets/sounds/tom.wav");
const audioL = new Audio("./assets/sounds/tink.wav");

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    audioA.currentTime = 0;
    audioA.play();
  } else if (event.key === "s" || event.key === "S") {
    audioS.currentTime = 0;
    audioS.play();
  } else if (event.key === "d" || event.key === "D") {
    audioD.currentTime = 0;
    audioD.play();
  } else if (event.key === "f" || event.key === "F") {
    audioF.currentTime = 0;
    audioF.play();
  } else if (event.key === "g" || event.key === "G") {
    audioG.currentTime = 0;
    audioG.play();
  } else if (event.key === "h" || event.key === "H") {
    audioH.currentTime = 0;
    audioH.play();
  } else if (event.key === "j" || event.key === "J") {
    audioJ.currentTime = 0;
    audioJ.play();
  } else if (event.key === "k" || event.key === "K") {
    audioK.currentTime = 0;
    audioK.play();
  } else if (event.key === "l" || event.key === "L") {
    audioL.currentTime = 0;
    audioL.play();
  }
});
