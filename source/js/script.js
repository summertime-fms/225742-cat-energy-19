var button = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__list");


button.addEventListener("click", function() {
  menu.classList.toggle("main-nav__list--open");
  button.classList.toggle("main-nav__toggle--close")

});
