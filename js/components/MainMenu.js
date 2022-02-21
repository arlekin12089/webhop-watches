function MainMenu() {
  const menu = document.querySelector(".main-menu--mobile");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuFilter = document.querySelector(".filter-toggle");
  const filterOptions = document.querySelector(".filter");
  const globalSearch = document.querySelector("#header-search");
  const searchWrap = document.querySelector(".search-field");
  const closeSearch = document.querySelector(".search-close");

  window.addEventListener("load", () => {
    toggleMobileMenu();
  });

  function toggleMobileMenu() {
    if (menuToggle) {
      menuToggle.addEventListener("click", (event) => {
        event.preventDefault();
        menuToggle.classList.toggle("menu-open");
        menu.classList.toggle("open");
      });
    }
    if (menuFilter) {
      menuFilter.addEventListener("click", (event) => {
        event.preventDefault();
        filterOptions.classList.toggle("open");
      });
    }

    if (globalSearch) {
      globalSearch.addEventListener("click", (event) => {
        event.preventDefault();
        searchWrap.classList.toggle("search-open");
      });
      closeSearch.addEventListener("click", () => {
        searchWrap.classList.remove("search-open");
      });
    }
  }
}

export default MainMenu();
