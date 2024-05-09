import axios from "axios";

console.log("JavaScript connected");

axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then((res) => {
  console.log(res.data);
  document.querySelector("#poke-name").innerText = res.data.name;
});

axios.get("https://swapi.dev/api/films/2").then((res) => {
  console.log(res.data);
  console.log("This will run 2nd");
  document.querySelector("#star-wars-movie").innerText = res.data.title;
});
console.log("This will run 1st");

const getPokemon = async () => {
  let numPokemon = document.querySelector("input").value;
  let myList = document.querySelector("ul");

  // axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${numPokemon}`)
  //     .then((res) => {
  //         console.log('pokeList', res.data)
  //         let pokeArray = res.data.results

  //         pokeArray.forEach((el) => {
  //             let newLi = document.createElement('li')
  //             newLi.innerText = el.name
  //             myList.appendChild(newLi)
  //         })
  //     })

  let pokeData = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${numPokemon}`
  );

  console.log("pokedata", pokeData);

  pokeData.data.results.forEach((el) => {
    let newLi = document.createElement("li");
    newLi.innerText = el.name;
    myList.appendChild(newLi);
  });
};

document.querySelector("button").addEventListener("click", getPokemon);

const orderCookies = async (evt) => {
  evt.preventDefault();

  let cookieInput = document.querySelector("#cookie-type-field").value;
  let quantity = document.querySelector("#qty-field").value;

  let response = await axios.post("/order-cookies", {
    quantity: quantity,
    cookieType: cookieInput,
  });

  console.log("cookie response", response);

  document.querySelector("#order-status").innerText = response.data.message;
  document.querySelector("#order-total").innerText =
    "Total: $" + response.data.total.toFixed(2);
};

document.querySelector("form").addEventListener("submit", orderCookies);
