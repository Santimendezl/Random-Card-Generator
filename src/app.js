/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  cartaGenerator();
  paloGenerator();
};
/*Función genérica Random: retona un valor de un array dado*/
function randomArray(array) {
  let rand = array[Math.floor(Math.random() * array.length)];
  return rand;
}
/* Función que genera un número aleatorio*/
function cartaGenerator() {
  const numero = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
  document.querySelector("#numero").innerHTML = randomArray(numero);
}
/* Función que genera un palo aleatorio*/
function paloGenerator() {
  const palo = ["♦", "♥", "♠", "♣"];
  let paloRandom = randomArray(palo);
  let paloDiv = document.querySelectorAll(".palo");
  paloDiv.forEach(element => {
    if (paloRandom === "♥" || paloRandom === "♦") {
      element.style.color = "red";
    } else {
      element.style.color = "black";
    }
    element.innerHTML = paloRandom;
  });
}

/* Listener para el botón generador*/
document.querySelector("#btGenera").addEventListener("click", () => {
  cartaGenerator();
  paloGenerator();
});
