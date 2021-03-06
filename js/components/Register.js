import * as UserRepository from "./UserRepository.js";

const form = document.getElementById("registration-form");
const userName = document.getElementById("username");
const userMail = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const streetAdress = document.getElementById("street-adress");
const phoneNumber = document.getElementById("phone-number");
const zipCode = document.getElementById("zip-code");
const location = document.querySelector("#location");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (password1.value !== password2.value) {
    let errorMessage = document.createElement("div");
    errorMessage.innerHTML = "Password should be the same!";
    form.appendChild(errorMessage);
    return;
  }
  let errorCode = UserRepository.register(
    userName.value,
    userMail.value,
    password1.value,
    streetAdress.value,
    phoneNumber.value,
    zipCode.value,
    location.value
  );
  if (errorCode === UserRepository.ERROR_USER_ALREADY_EXISTS) {
    alert("user exists");
  } else if (errorCode === UserRepository.ERROR_EMAIL_IS_EMPTY) {
    alert("email is empty");
  } else if (errorCode === UserRepository.ERROR_PASSWORD_IS_EMPTY) {
    alert("password is empty");
  } else {
    window.location.href = "index.html";
  }
});

