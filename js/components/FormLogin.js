const loginBtn= document.querySelector(".login_btn");
const loginForm = document.querySelector(".login_form");
const emailField = document.querySelector("#login_email_field")
const passwordField = document.querySelector("#login_password_field")



let userEmailInput = emailField.value;
let userPasswordInput = passwordField.value;

let storedUsers = JSON.parse(localStorage.getItem("user")) ;


let header_user = document.querySelector(".user_menu");
let userDropdown = document.querySelector("#userDropdown")
let login_nav = document.querySelector(".login_nav")
let num= 0;

console.log(header_user);

header_user.addEventListener("click", (e) => {
  console.log('click');
  e.preventDefault();
  num ++
  console.log(1)
 
  if(num ===1){
    
    userDropdown.classList.add("user_dropdown")
    num++
  
  } else {
    userDropdown.classList.toggle("hide_userDropdown")
    
  }
})

const closeDropdownBtn = document.querySelector(".closeDropdown");
closeDropdownBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userDropdown.classList.toggle("hide_userDropdown")
} )

