const inputEmail = document.querySelector("#emailText");
const btnSubmit = document.querySelector("#btnSubmit");
const errorLabel = document.querySelector(".errorLabel");
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputEmail.value.match(validRegex)) {
    errorLabel.innerText = "Valid Email Address";
    errorLabel.style.color = "green";
    inputEmail.style.border = "1px solid hsla(97, 100%, 50%, 1)";
  } else {
    errorLabel.innerText = "Check your email please";
    errorLabel.style.color = "hsl(0, 100%, 63%)";
    inputEmail.style.border = "1px solid hsl(0, 100%, 63%)";
  }
});
