function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const allBoxesParent = document.querySelector("#controls");
const boxesList = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
// console.log(allBoxesParent);
// console.log(boxesList);
// console.log(createButton);
// console.log(destroyButton);
// console.log(inputEl);
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(inputEl.value);
  clearBoxes();
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesList.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  clearBoxes();
}

function clearBoxes() {
  boxesList.innerHTML = "";
}
