const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    return alert("Увага! Всі поля мають бути заповнені!");
  }

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const formData = {
    mail,
    password,
  };

  console.log(formData);
}
