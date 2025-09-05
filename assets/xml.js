const req = new XMLHttpRequest();
let data;

// req.onload = function () {
//   data = JSON.parse(this.responseText);
//   console.log(data);
// };

// req.onerror = function () {
//   console.log("Error", this);
// };

// req.open("GET", "https://catfact.ninja/fact");
// req.send();

// fetch("https://catfact.ninja/fact")
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Tidak bisa fetch data dari url tersebut");
//     }
//     return res.json();
//   })

//   .then((data) => {
//     console.log("json", data);
//   })

//   .catch((err) => {
//     console.log("error", err);
//   });

// const load = async () => {
//   try {
//     const res = await fetch("https://catfact.ninja/fact");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log("error", err);
//   }
// };

// load();

// axios
//   .get("https://catfact.ninja/fact")
//   .then((res) => {
//     console.log(res.data);
//   })

//   .catch((err) => {
//     console.log(err);
//     alert(err.message);
//   });
// const jokes = document.querySelector("#jokes");
// const button = document.querySelector("button");

// const addJokes = async () => {
//   const jokeText = await getJokes();
//   const newLI = document.createElement("LI");
//   newLI.append(jokeText);
//   jokes.append(newLI);
// };

// const getJokes = async () => {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   const res = await axios.get("https://icanhazdadjoke.com/", config);
//   return res.data.joke;
// };

// button.addEventListener("click", addJokes);
