// // JavaScript Document
var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  // deNav = event.target.parentNode;
  // deNav.classList.toggle("toonMenu");

  document.body.classList.toggle("toonMenu");
}



var deSearch = document.querySelector("nav label");

deSearch.addEventListener("click", toggleSearch);

function toggleSearch(event) {
  searchBalk = event.target.parentNode;
  searchBalk.classList.toggle("toonSearch");
}