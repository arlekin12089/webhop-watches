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
function SetupUserName() {}

function Header() {
  SearchInput();
  SetupUserName();
}

export default Header();
