var button = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__list");

button.addEventListener("click", function() {
  if (!menu.classList.contains("main-nav__list--open")) {
  menu.classList.remove("main-nav__list--close");
  menu.classList.add("main-nav__list--open");
  button.classList.add("main-nav__toggle--close")
  }  else {
    menu.classList.remove("main-nav__list--open");
    menu.classList.add("main-nav__list--close");

    button.classList.remove("main-nav__toggle--close");
  }

})
