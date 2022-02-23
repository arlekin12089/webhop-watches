import * as UserRepository from "./UserRepository.js";
const formLogin = document.querySelector( ".login_form" );
const userEmail = document.getElementById( "login_email_field" );
const userPassword = document.getElementById( "login_password_field" );
const errors = document.querySelector( ".errors" );

formLogin.addEventListener( "submit", ( e ) => {
	e.preventDefault();
	let isSuccess = UserRepository.login( userEmail.value, userPassword.value );
	if ( isSuccess ) {
		window.location.href = "index.html";
	} else {
		errors.style.display = "block";
	}
} );
