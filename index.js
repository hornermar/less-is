import { initCursor, removeCursor } from "./cursor.js";

const titleEl = document.querySelector(".title");
const authorEl = document.querySelector(".author");
const authorLifeEl = document.querySelector(".author-life");
const styleEl = document.querySelector(".style");
const switchInputEl = document.querySelector(".switch-input");
const switchEl = document.querySelector(".switch");

function switchChangeHandler() {
  if (switchInputEl.checked) {
    titleEl.innerHTML = "a bore";
    authorEl.innerHTML = "Robert Venturi";
    authorLifeEl.innerHTML = "1925–2018";
    styleEl.innerHTML = "Postmodernism";

    document.body.style.backgroundColor = "rgb(243, 192, 26)";
    document.body.style.cursor = "none";
    initCursor();
    switchEl.style.cursor = "none";
  } else {
    titleEl.innerHTML = "more";
    authorEl.innerHTML = "Ludwig Mies van der Rohe";
    authorLifeEl.innerHTML = "1886–1969";
    styleEl.innerHTML = "Modernism";

    document.body.style.backgroundColor = "lightgray";
    document.body.style.cursor = "initial";
    removeCursor();
    switchEl.style.cursor = "pointer";
  }
}

switchEl.addEventListener("change", switchChangeHandler);
