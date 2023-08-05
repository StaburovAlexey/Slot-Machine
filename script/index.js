const drums = [
  ["A", "B", "C"],
  ["A", "B", "C"],
  ["A", "B", "C"],
];

const drum1 = document.getElementById("drum1");
const drum2 = document.getElementById("drum2");
const drum3 = document.getElementById("drum3");

function spin() {
  drum1.innerHTML = drums[0][Math.floor(Math.random() * drums[0].length)];
  drum2.innerHTML = drums[1][Math.floor(Math.random() * drums[1].length)];
  drum3.innerHTML = drums[2][Math.floor(Math.random() * drums[2].length)];
  if (drum1.textContent === drum2.textContent && drum1.textContent === drum3.textContent) {
    console.log("win");
  }
}

setInterval(spin, 2000);
