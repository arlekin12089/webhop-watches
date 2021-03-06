/*
Data view

User:
{
    email: "user@gmail.com",
    password: 123456,
    name: "User",
    street-adress: "vägen12",
    phone-number: "0723581441"
}


Users in local storage
{
    "email1": {
        email: "user@gmail.com",
        password: 123456,
        name: "User1"
          street-adress: "vägen13",
        phone-number: "0723581441"
    },

    "email2": {
        email:"user2@gmail.com",
        password: 123456,
        name: "User2"
       street-adress: "vägen14,
       phone-number: "0764921122"
    }
}
*/

const KEY_USERS = "users";
const KEY_LOGGED_IN_USER = "loggedInUser";
export const ERROR_USER_ALREADY_EXISTS = 1;
export const ERROR_PASSWORD_IS_EMPTY = 2;
export const ERROR_EMAIL_IS_EMPTY = 3;
export const ERROR_STREET_ADRESS_IS_EMPTY = 4;
export const ERROR_PHONE_NUMBER_IS_EMPTY = 5;
export const ERROR_ZIP_CODE_IS_EMPTY = 6;
export const ERROR_LOCATION_IS_EMPTY = 7;
export const NO_ERROR = 0;

let users = {};

function loadUsers() {
  if (localStorage.getItem(KEY_USERS) !== null) {
    return JSON.parse(localStorage.getItem(KEY_USERS));
  } else {
    return {};
  }
}

function saveUsers() {
  localStorage.setItem(KEY_USERS, JSON.stringify(users));
}

export function register(name, email, password, streetAdress, phoneNumber, zipCode, location) {
  //add user to users
  if (email.length === 0) {
    return ERROR_EMAIL_IS_EMPTY;
  }
  if (users[email] !== undefined) {
    return ERROR_USER_ALREADY_EXISTS;
  }
  if (password.length === 0) {
    return ERROR_PASSWORD_IS_EMPTY;
  }
  if (streetAdress.length === 0) {
    return ERROR_STREET_ADRESS_IS_EMPTY;
  }
  if (phoneNumber.length === 0) {
    return ERROR_PHONE_NUMBER_IS_EMPTY;
  }
  if (zipCode.length === 0) {
    return ERROR_ZIP_CODE_IS_EMPTY;
  }
  if (location.length === 0) {
    return ERROR_LOCATION_IS_EMPTY;
  }

  users[email] = {
    email,
    password,
    name,
    streetAdress,
    phoneNumber,
    zipCode,
    location
  };
  saveUsers();
  localStorage.setItem(KEY_LOGGED_IN_USER, email);
  return NO_ERROR;
}

/**
 * Check if user's email exists in Local Storage and password matches with user's password.
 * If all checks are successful, then we set this user as logged in.
 * @param {String} email
 * @param {String} password
 * @returns {Boolean} True if login is successful and false if mail or password don't match
 */
export function login ( email, password ) {
  if ( users[email] === undefined ) {
    return false;
  }

  if ( password !== users[email].password ) {
    return false;
  }
  localStorage.setItem( KEY_LOGGED_IN_USER, email );
  return true;
}



/**
 * @returns {String} Name of currently logged in user, otherwise undefined
 */
export function getLoggedInUserName () {
  let email = localStorage.getItem( KEY_LOGGED_IN_USER );
  if ( email === undefined || email === null ) {
    return undefined;
  }
  return users[email].name;
}

export function logOut () {
  localStorage.removeItem( KEY_LOGGED_IN_USER );
}


users = loadUsers();
window.login = login;


