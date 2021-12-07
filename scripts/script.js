// // JavaScript Document

// BURGERMENU

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  // deNav = event.target.parentNode;
  // deNav.classList.toggle("toonMenu");

  document.body.classList.toggle("toonMenu");
}




// SEARCH INPUT

var deSearch = document.querySelector("nav label");

deSearch.addEventListener("click", toggleSearch);

function toggleSearch(event) {
  searchBalk = event.target.parentNode;
  searchBalk.classList.toggle("toonSearch");
}



// DARK / LIGHT MODE
// var logoChange = document.querySelector("header nav > a");

// var lichteKnop = document.querySelector("header nav ul li:nth-of-type(9) button");

// lichteKnop.addEventListener("click", wordtLicht);

// function wordtLicht(event) {
//   document.documentElement.classList.remove("colorModeChange");
//   document.body.classList.remove("toonMenu");

//   document.getElementById('logo').src='../images/disneyLogo.svg';
// }



// var donkereKnop = document.querySelector("header nav ul li:last-of-type button");

// donkereKnop.addEventListener("click", wordtDonker);

// function wordtDonker(event) {
//   document.documentElement.classList.add("colorModeChange");
//   document.body.classList.remove("toonMenu");

//   document.getElementById('logo').src='../images/disneylandLogoWhite.png';
// }



// DARK / LIGHT MODE
var logoChange = document.querySelector("header nav > a");

var lichteKnop = document.querySelector("header nav ul li:nth-of-type(9) button");

lichteKnop.addEventListener("click", wordtLicht);

function wordtLicht(event) {
  document.documentElement.classList.remove("colorModeChange");
  document.body.classList.remove("toonMenu");

  document.getElementById('logo').src='../images/disneyLogo.svg';
}



var donkereKnop = document.querySelector("header nav ul li:last-of-type button");

donkereKnop.addEventListener("click", wordtDonker);

function wordtDonker(event) {
  document.documentElement.classList.add("colorModeChange");
  document.body.classList.remove("toonMenu");

  document.getElementById('logo').src='../images/disneylandLogoWhite.png';
}