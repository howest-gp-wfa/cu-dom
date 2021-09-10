"use strict";

window.addEventListener("load", initialize);

let divText;
let divContainer;

function initialize() {

  const btnChangeText = document.getElementById("change-text");
  const btnAlignRight = document.querySelector("#align-right");
  divText = document.querySelector("#text");

  btnChangeText.addEventListener("click", changeText);
  btnAlignRight.addEventListener("click", alignTextRight);
  
  divContainer = document.querySelector("#container");
  addParagraph();

}

function changeText() {
  divText.textContent = "Gewijzigde tekst";
}

function alignTextRight() {
  divText.setAttribute("class", "align-right");
}

function addParagraph() {
  
  const content = "Wat tekst voor de alinea";
  const paragraph = document.createElement("p");
  
  /*ALWAYS prefer using CSS-classes before using the HTML style attribute! 
  /Example only for demo purposes!*/
  paragraph.textContent = content;
  paragraph.setAttribute("style", "color: red;");

  divContainer.appendChild(paragraph);
  
}

