function MainMenu() {
  const menu = document.querySelector(".main-menu--mobile");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuFilter = document.querySelector(".filter-toggle");
  const filterOptions = document.querySelector(".filter");

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
  }
}

export default MainMenu();
