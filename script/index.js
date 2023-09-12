const drums = [
  ["./image/slide_2.png", "./image/slide_3.png", "./image/slide_4.png"],
  ["./image/slide_2.png", "./image/slide_3.png", "./image/slide_4.png"],
  ["./image/slide_2.png", "./image/slide_3.png", "./image/slide_4.png"],
];

const spinBtn = document.querySelector(".footer__btn-spin");
const autoBtn = document.querySelector(".footer__btn-auto");
let intervalId;

const drum1 = document.getElementById("drum1");
const drum2 = document.getElementById("drum2");
const drum3 = document.getElementById("drum3");

function spin() {
  drum1.src = drums[0][Math.floor(Math.random() * drums[0].length)];
  drum2.src = drums[1][Math.floor(Math.random() * drums[1].length)];
  drum3.src = drums[2][Math.floor(Math.random() * drums[2].length)];
}


spinBtn.addEventListener("click", spin);
autoBtn.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  } else {
    intervalId = setInterval(spin, 1000);
  }
});
// setInterval(spin, 2000);
