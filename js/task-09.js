const body = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

changeColorButton.addEventListener("click", getRandomColor);

function getRandomColor() {
  textEl.textContent = getRandomHexColor();
  body.style.backgroundColor = textEl.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
