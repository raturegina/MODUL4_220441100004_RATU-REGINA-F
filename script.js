const menuBar = document.querySelector(".menu-bar");  //ini dipakai oleh toggle strip 3 di div class menu-navigation
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", function () {
  menuNav.classList.toggle("menu-active");
});
