const menu = document.querySelector(".navbar__menu");
const menuButton = document.querySelector("#menu-button");

if (menuButton) {
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("navbar__menu--open");
  });
}

const menuCloseButton = document.querySelector(".menu-close-button");
if (menuCloseButton) {
  menuCloseButton.addEventListener("click", function () {
    menu.classList.toggle("navbar__menu--open");
  });
}
