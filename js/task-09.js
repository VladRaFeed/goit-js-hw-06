const body = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

changeColorButton.addEventListener("click", getRandomColor);

function getRandomColor() {
  body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
