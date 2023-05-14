const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const userNameChange = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  userNameChange.textContent = event.currentTarget.value;
}
