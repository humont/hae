// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var menu = document.getElementById("myNav");
var button = document.getElementById("hmbrgr");
var inner = document.querySelector(".hamburger-inner");
var mobMenu = document.querySelector(".menu_mobile")
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  menu.classList.toggle("show");
  button.classList.toggle("color-flip");
  mobMenu.classList.toggle("mobMenu-active");
});
