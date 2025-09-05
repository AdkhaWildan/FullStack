// const container = document.querySelector("#container");

// const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// for (let i = 1; i <= 500; i++) {
//   const pokeBall = document.createElement("div");
//   pokeBall.classList.add("pokemon");

//   const imgPokemon = document.createElement("img");
//   imgPokemon.src = `${imgUrl}${i}.png`;

//   const label = document.createElement("span");
//   label.innerText = `#${i}`;

//   pokeBall.appendChild(imgPokemon);
//   pokeBall.appendChild(label);
//   container.appendChild(pokeBall);
// }

// // button.ondblclick = function () {
// //   alert("pop out");
// // };

// const button = document.querySelector("#clickme");
// const rgbnumber = document.querySelector("h1");

// button.addEventListener("click", function () {
//   // Generate warna random
//   let r = Math.floor(Math.random() * 255) + 1;
//   let g = Math.floor(Math.random() * 255) + 1;
//   let b = Math.floor(Math.random() * 255) + 1;

//   // Ubah warna background
//   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

//   // Ubah teks h1
//   rgbnumber.innerText = `Warnanya adalah (${r}, ${g}, ${b})`;
// });

// const button = document.querySelector("#clickme");
// const buttons = document.querySelectorAll("button");
// const h1 = document.querySelector("h1");

// const generateColor = () => {
//   let r = Math.floor(Math.random() * 255) + 1;
//   let g = Math.floor(Math.random() * 255) + 1;
//   let b = Math.floor(Math.random() * 255) + 1;

//   return `rgb(${r}, ${g}, ${b})`;
// };

// function colorize() {
//   this.style.backgroundColor = generateColor();
//   this.style.color = generateColor();
// }

// for (let button of buttons) {
//   button.addEventListener("click", colorize)
//
//   ;
// }

// for (let button of buttons) {
//   button.addEventListener("click", () => {
//     button.style.backgroundColor = generateColor();
//     button.style.color = generateColor();
//   });
// }

// button.addEventListener("click", function () {
//   const newColor = generateColor();
//   // console.log(newColor);

//   document.body.style.backgroundColor = newColor;

//   h1.innerText = newColor;
// });

const form = document.querySelector("#form");
const input = document.querySelector("input");
const notes = document.querySelector("#notes");

form.addEventListener("submit", function (X) {
  X.preventDefault();
  const noteValue = input.value;
  const newlist = document.createElement("li");
  newlist.innerText = noteValue;

  notes.append(newlist);
  input.value = "";
});
