const menu = document.querySelector(".navbar__menu");
const menuButton = document.querySelector(".navbar-menu__button--open");

if (menuButton) {
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("navbar__menu--open");
  });
}

const menuCloseButton = document.querySelector(".navbar-menu__button--close");
if (menuCloseButton) {
  menuCloseButton.addEventListener("click", function () {
    menu.classList.toggle("navbar__menu--open");
  });
}
