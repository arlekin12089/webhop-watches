function MainMenu() {
  const menu = document.querySelector(".main-menu--mobile");
  const menuToggle = document.querySelector(".menu-toggle");

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
  }
}

export default MainMenu();
