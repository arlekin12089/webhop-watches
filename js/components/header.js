const header_user = document.querySelector(".iconMenu");
const userDropdown = document.querySelector("#userDropdown");

let num= 0;

header_user.addEventListener("click", (e) => {
   e.preventDefault();
  num ++
   
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
});