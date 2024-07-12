///////////////////////////////////////////////////////////////

//game

const buttonUnder = document.querySelector(".my-button-under");
const buttonLeft = document.querySelector(".my-button-left");
const buttonRight = document.querySelector(".my-button-right");
const buttonTop = document.querySelector(".my-button-top");
const buttonRandomColor = document.querySelector(".my-button-color");
const buttonRandomColorBg = document.querySelector(".my-button-color-bg");
const buttonStars = document.querySelector(".my-button-color-stars");

const objectBall = document.querySelector(".balls");
const spaceForPlay = document.querySelector(".play-game");

let stepTopBottom = 0;
let stepRightLeft = 0;
buttonUnder.addEventListener("click", () => {
  stepTopBottom -= 100;
  objectBall.style.marginBottom = `${stepTopBottom}px`;
});

buttonTop.addEventListener("click", () => {
  stepTopBottom += 100;
  objectBall.style.marginBottom = `${stepTopBottom}px`;
});

buttonRight.addEventListener("click", () => {
  stepRightLeft -= 100;
  objectBall.style.marginRight = `${stepRightLeft}px`;
});

buttonLeft.addEventListener("click", () => {
  stepRightLeft += 100;
  objectBall.style.marginRight = `${stepRightLeft}px`;
});

const arrayColors = [
  "linear-gradient(90deg,#6a57cd,#b952c5,#d25fba,#e488a1,#fab687)",
  "linear-gradient(90deg,#8bff4d,#ece646,#4fc70f)",
  "linear-gradient(90deg,#00a7b2,#0056d6,#942192)",
  "linear-gradient(90deg,#6eff7f,#00fffb,#6e97ff,#cd7dff)",
  "linear-gradient(90deg,#ff204e,#a0153e,#5d0e41,#00224d)",
  "linear-gradient(90deg,#9900ff,#4d00db,#000000)",
  "linear-gradient(90deg,#000000,#000000,#ff0000)",
  "linear-gradient(90deg,#eeff00,#0400ff)",
  "linear-gradient(90deg,#0e1ff2,#ff0051,#f1fe37)",
  "linear-gradient(90deg,#001eff,#ff000d)",
  "linear-gradient(90deg,#000000,#3700ff,#000000)",
  "linear-gradient(90deg,#fff100,#e60012)",
];

buttonRandomColor.addEventListener("click", () => {
  callback(arrayColors);
});

const callback = (colors) => {
  const inx = Math.round(Math.random() * colors.length - 1);
  if (inx >= 0) {
    return (objectBall.style.backgroundImage = colors[inx]);
  } else {
    return (objectBall.style.backgroundImage =
      "linear-gradient(90deg,#fff100,#e60012)");
  }
};

buttonRandomColorBg.addEventListener("click", () => {
  callbackBg(arrayColors);
});

const callbackBg = (colors) => {
  const inx = Math.round(Math.random() * colors.length - 1);
  if (inx >= 0) {
    return (spaceForPlay.style.backgroundImage = colors[inx]);
  } else {
    return (spaceForPlay.style.backgroundImage =
      "linear-gradient(90deg,#fff100,#e60012)");
  }
};

const containerForBoll = document.querySelector(".container-for-ball");
buttonStars.addEventListener("click", () => {
  containerForBoll.classList.toggle("baground-img");
});
///////////////////////////////////////////////////////////////
