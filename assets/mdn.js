// const list = document.querySelector("ul");
// const input = document.querySelector("input");
// const button = document.querySelector("button");

// function add() {
//   const item = input.value;
//   input.value = " ";

//   const listItem = document.createElement("LI");
//   const span = document.createElement("SPAN");
//   const btn = document.createElement("BUTTON");

//   listItem.appendChild(span);
//   listItem.appendChild(btn);

//   span.textContent = item;
//   btn.textContent = "Delete";

//   input.focus();

//   list.appendChild(listItem);
//   function deleteList() {
//     list.removeChild(listItem);
//   }
//   btn.addEventListener("click", deleteList);
// }

// input.focus();

// button.addEventListener("click", add);

async function populate() {
  const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  console.log(superHeroes);

  const header = document.querySelector("header");

  const h1 = document.createElement("H1");
  h1.textContent = superHeroes.squadName;
  const list = document.querySelector("section");

  for (const hero of superHeroes.members) {
    const para = document.createElement("P");
    para.textContent = hero.name;
    list.appendChild(para);
  }

  header.appendChild(h1);

  //   populateHeader(superHeroes);
  //   populateHeroes(superHeroes);
}

// function populateHeader(obj) {
//   const header = document.querySelector("header");
//   const myH1 = document.createElement("h1");
//   myH1.textContent = obj.squadName;
//   header.appendChild(myH1);

//   const myPara = document.createElement("p");
//   myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
//   header.appendChild(myPara);
// }

// function populateHeroes(obj) {
//   const section = document.querySelector("section");
//   const heroes = obj.members;

//   for (const hero of heroes) {
//     const myArticle = document.createElement("article");
//     const myH2 = document.createElement("h2");
//     const myPara1 = document.createElement("p");
//     const myPara2 = document.createElement("p");
//     const myPara3 = document.createElement("p");
//     const myList = document.createElement("ul");

//     myH2.textContent = hero.name;
//     myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
//     myPara2.textContent = `Age: ${hero.age}`;
//     myPara3.textContent = "Superpowers:";

//     const superPowers = hero.powers;
//     for (const power of superPowers) {
//       const listItem = document.createElement("li");
//       listItem.textContent = power;
//       myList.appendChild(listItem);
//     }

//     myArticle.appendChild(myH2);
//     myArticle.appendChild(myPara1);
//     myArticle.appendChild(myPara2);
//     myArticle.appendChild(myPara3);
//     myArticle.appendChild(myList);

//     section.appendChild(myArticle);
//   }
// }

populate();
// let myObj = { name: "Chris", age: 38 };
// myObj;
// let myString = JSON.stringify(myObj);
// myString;
