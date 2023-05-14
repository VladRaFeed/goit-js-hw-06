const inputEl = document.querySelector("#font-size-control");
const outputEl = document.querySelector("#text");
outputEl.style.fontSize = inputEl.addEventListener("input", onInputValue);

function onInputValue(event) {
  const inputValue = event.currentTarget.value;
  outputEl.style.fontSize = `${inputValue}px`;
}
