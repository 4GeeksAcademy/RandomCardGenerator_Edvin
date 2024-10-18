/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// variables
//const palos = ["♦", "♥", "♠", "♣"];
//const contentido = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

//const paloUp = document.querySelector("#paloUp");
//const paloCenter = document.querySelector("#paloCenter");
//const paloDown = document.querySelector("#paloDown");

//const card = document.querySelector("#card");
//funciones

window.onload = () => {
  //   document.querySelector("#btn").addEventListener("click", randomCard);

  const generateCard = document.querySelector("#btn");
  generateCard.addEventListener("click", randomCard);

  function randomCard() {
    const palos = ["♦", "♥", "♠", "♣"];
    const contenido = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    const randomPalos = palos[Math.floor(Math.random() * palos.length)];
    const randomContenido =
      contenido[Math.floor(Math.random() * contenido.length)];

    document.querySelector("#paloUp").innerHTML = randomPalos;
    document.querySelector("#paloCenter").innerHTML = randomContenido;
    document.querySelector("#paloDown").innerHTML = randomPalos;

    const color =
      randomPalos === "♦" || randomContenido === "♥" ? "red" : "black";

    document.querySelector("#paloUp").style.color = color;
    document.querySelector("#paloCenter").style.color = color;
    document.querySelector("#paloDown").style.color = color;
  }

  randomCard();
};
