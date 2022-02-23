import * as UserRepository from "./UserRepository.js";
function SearchInput() {
  let formSearch = document.getElementById("search-form");
  formSearch.addEventListener(
    "submit",
    async (e) => {
      e.preventDefault();
      let searchInputValue = document.getElementById("search-header").value;
      window.location.href = `search-results.html?searchText=${searchInputValue}`;
    },
    false
  );
}
function SetupUserName () {
	const userWrap = document.querySelector( ".dropdown-users" );
	const userNameElement = document.querySelector( ".userName" );
	const registerLink = document.querySelector( ".register-link" );
	const loginLink = document.querySelector( ".login-link" );
	const logoutLink = document.querySelector( ".logout-link" );
	let userName = UserRepository.getLoggedInUserName();
	if ( userName ) {
		userNameElement.innerHTML = UserRepository.getLoggedInUserName();
		registerLink.style.display = "none";
		loginLink.style.display = "none";
		logoutLink.style.display = "block";
	} else {
		userNameElement.innerHTML = "";
		registerLink.style.display = "block";
		loginLink.style.display = "block";
		logoutLink.style.display = "none";
	}

	logoutLink.addEventListener( "click", () => {
		UserRepository.logOut();
		window.location.href = "index.html";
	} );
}


function Header() {
  SearchInput();
  SetupUserName();
}

export default Header();
