var menuBtn = document.querySelector(".site-header-navicon");
var navMenu = document.querySelector(".site-header-nav-list");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});
