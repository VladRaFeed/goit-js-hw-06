const inputEl = document.querySelector("#validation-input");
const inputLengthData = document.querySelector('[data-length="6"]');
const inputLength = Number(inputLengthData.dataset.length);

inputEl.addEventListener("blur", onInputBlur);

let texOnInput = "";

function onInputBlur(event) {
  texOnInput = event.currentTarget.value;
  if (texOnInput.length > inputLength || texOnInput.length < inputLength) {
    inputEl.classList.add("invalid");
  } else if (texOnInput.length === inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
