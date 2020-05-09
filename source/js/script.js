let button = document.querySelector(".main-nav__toggle");
let menu = document.querySelector(".main-nav__list");

button.classList.add("main-nav__toggle--open");
menu.classList.add("main-nav__list--close");

button.addEventListener("click", function() {

  menu.classList.toggle("main-nav__list--open");

  button.classList.toggle("main-nav__toggle--close")
});
