const userName = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const location = document.getElementById("location");
const zipCode = document.getElementById("zip-code");
const streetAdress = document.getElementById("street-adress");
const phoneNumber = document.getElementById("phone-number");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (password1.value !== password2.value) {
      let errorMessage = document.createElement("div");
      errorMessage.innerHTML = "Password should be the same!";
      form.appendChild(errorMessage);
      return;
    }
}