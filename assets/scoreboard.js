const p1 = document.querySelector("#playerone");
const p2 = document.querySelector("#playertwo");
const p1buttonadd = document.querySelector("#p1buttonadd");
const p2buttonadd = document.querySelector("#p2buttonadd");
const p1buttonmin = document.querySelector("#p1buttonmin");
const p2buttonmin = document.querySelector("#p2buttonmin");
const reset = document.querySelector("#reset");
const winPointGame = document.querySelector("#winpointinput");
const form = document.querySelector("#form");
const gamewin = document.querySelector("#winpoint");

let p1score = 0;
let p2score = 0;
let added = 0;
let winPoint = null;
let minimumPoint = 0;
let isGameMinimum = false;
let isGameOver = false;

function resetGame() {
  winPoint = null;
  isGameOver = false;
  isGameMinimum = false;
  p1score = 0;
  p2score = 0;
  p1.textContent = 0;
  p2.textContent = 0;
  gamewin.textContent = `Win Point :`;
}

p1buttonadd.addEventListener("click", function () {
  if (!isGameOver && winPoint != null) {
    p1score++;
    if (p1score === winPoint) {
      isGameOver = true;
    }
    p1.textContent = p1score;
  }
});

p1buttonmin.addEventListener("click", function () {
  if (p1score > 0 && isGameOver != true) {
    p1score--;
    p1.textContent = p1score;
  }
});

p2buttonadd.addEventListener("click", function () {
  if (!isGameOver && winPoint != null) {
    p2score += 1;
    if (p2score === winPoint) {
      isGameOver = true;
    }
    p2.textContent = p2score;
  }
});

p2buttonmin.addEventListener("click", function () {
  if (p2score > 0 && isGameOver != true) {
    p2score--;
    p2.textContent = p2score;
  }
});

reset.addEventListener("click", resetGame);

form.addEventListener("submit", function (X) {
  X.preventDefault();
  winPointGame.value = "";
});

winPointGame.addEventListener("change", function () {
  winPoint = parseInt(this.value);
  gamewin.textContent = `Win Point : ${parseInt(this.value)}`;
});
