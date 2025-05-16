const menu = document.querySelector(".navbar__menu");
const menuButton = document.querySelector("#menuButton");

if (menuButton) {
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("navbar__menu--open");
  });
}

const menuCloseButton = document.querySelector(".navbar-menu-close__button");
if (menuCloseButton) {
  menuCloseButton.addEventListener("click", function () {
    menu.classList.toggle("navbar__menu--open");
  });
}
