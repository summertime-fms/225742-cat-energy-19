let button = document.querySelector(".main-nav__toggle");
let menu = document.querySelector(".main-nav__list");

menu.classList.add("main-nav__list--close");

button.addEventListener("click", function() {

  menu.classList.toggle("main-nav__list--open");

  button.classList.toggle("main-nav__toggle--close")
});

function initMap() {
  let coordinates = {lat: 47.212325, lng: 38.933663},

    map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates,
          scrollwheel: false
      });
}
