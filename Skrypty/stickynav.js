
// window.onscroll = function() {
//   var navbar = document.getElementById("navbar");
//   var header = document.querySelector(".header");
//   var sticky = navbar.offsetTop;

//   if (window.pageYOffset > sticky) {
//     navbar.classList.add("sticky");
//     header.style.marginBottom = "61px";
//   } else {
//     navbar.classList.remove("sticky");
//     header.style.marginBottom = "0";
//   }
// }

window.onscroll = function() {
  var navbar = document.getElementById("navbar");
  var header = document.querySelector(".header");
  var backToTop = document.getElementById('backToTop'); // Dodajemy przycisk
  var sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    // header.style.marginBottom = "61px";
    backToTop.classList.add('gora'); 
  } else {
    navbar.classList.remove("sticky");
    // header.style.marginBottom = "0";
    backToTop.classList.remove('gora'); 
  }
}
