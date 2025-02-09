import { initCursor, removeCursor } from "./cursor.js";

const titleEl = document.querySelector(".title");
const authorEl = document.querySelector(".author");
const authorLifeEl = document.querySelector(".author-life");
const styleEl = document.querySelector(".style");
const switchInputEl = document.querySelector(".switch-input");
const switchEl = document.querySelector(".switch");

const footerEl = document.querySelector("footer");

function switchChangeHandler() {
  if (switchInputEl.checked) {
    titleEl.innerHTML = "a bore";
    authorEl.innerHTML = "Robert Venturi";
    authorLifeEl.innerHTML = "1925–2018";
    styleEl.innerHTML = "Post-";

    footerEl.innerHTML =
      "Design inspired by a Children's Museum, Houston (1992)";
    document.body.style.backgroundColor = "rgb(243, 192, 26)";
    document.body.style.cursor = "none";
    initCursor();
    switchEl.style.cursor = "none";
  } else {
    titleEl.innerHTML = "more";
    authorEl.innerHTML = "Ludwig Mies van der Rohe (1886–1969)";
    authorLifeEl.innerHTML = "1886–1969";
    styleEl.innerHTML = "";

    footerEl.innerHTML = "";

    document.body.style.backgroundColor = "lightgray";
    document.body.style.cursor = "initial";
    removeCursor();
    switchEl.style.cursor = "pointer";
  }
}

switchEl.addEventListener("change", switchChangeHandler);
