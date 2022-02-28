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

export function register(name, email, password, streetAdress, phoneNumber) {
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
  users[email] = {
    email,
    password,
    name,
    streetAdress,
    phoneNumber
  };
  saveUsers();
  localStorage.setItem(KEY_LOGGED_IN_USER, email);
  return NO_ERROR;
}
users = loadUsers();