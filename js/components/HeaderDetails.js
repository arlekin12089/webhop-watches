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
	const userNameElement = document.querySelectorAll( ".userName" );
	const registerLink = document.querySelectorAll( ".register-link" );
	const loginLink = document.querySelectorAll( ".login-link" );
	const logoutLink = document.querySelectorAll( ".logout-link" );

	let userName = UserRepository.getLoggedInUserName();
	
	if ( userName ) {
		userNameElement.forEach( elem => {
			elem.innerHTML = UserRepository.getLoggedInUserName();
		} )
		registerLink.forEach( elem => {
			elem.style.display = "none";
		} )
		loginLink.forEach( elem => {
			elem.style.display = "none";
		} )
		logoutLink.forEach( elem => {
			elem.style.display = "block";
		} )
	} else {
		// userNameElement.innerHTML = "";
		// registerLink.style.display = "block";
		// loginLink.style.display = "block";
		// logoutLink.style.display = "none";
		userNameElement.forEach( elem => {
			elem.innerHTML = "";
		} )
		registerLink.forEach( elem => {
			elem.style.display = "block";
		} )
		loginLink.forEach( elem => {
			elem.style.display = "block";
		} )
		logoutLink.forEach( elem => {
			elem.style.display = "none";
		} )
	}
	logoutLink.forEach( elem => {
		elem.addEventListener( 'click', () => {
			UserRepository.logOut();
			window.location.href = "index.html";
		} )
		} )

}


function Header() {
  SearchInput();
  SetupUserName();
}

export default Header();
