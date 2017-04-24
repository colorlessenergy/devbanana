var menuImg = document.getElementById("menu-img");
var responsiveNav = document.getElementById("responsive-nav");
var imgMenu = document.getElementById("img-menu");

menuImg.addEventListener("click", function () {
  responsiveNav.style.display = "none";
});

imgMenu.addEventListener("click", function () {
  responsiveNav.style.display = "flex";
})
