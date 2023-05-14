const addButtonEl = document.querySelector('[data-action="increment"]');
const removeButtonEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

addButtonEl.addEventListener("click", onButtonClickAdd);
removeButtonEl.addEventListener("click", onButtonClickRemove);

function onButtonClickAdd() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function onButtonClickRemove() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
