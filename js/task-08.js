const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  //   console.dir(event.currentTarget.elements.email.value);
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    return alert("Увага! Всі поля мають бути заповнені!");
  }

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`);
    form.reset();
  });
}
