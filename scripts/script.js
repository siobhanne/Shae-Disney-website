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
  // niet naar vragen
  searchBalk = event.target.parentNode;
  searchBalk.classList.toggle("toonSearch");
}




// DARK / LIGHT MODE
var lichteKnop = document.querySelector("header nav ul li:nth-of-type(9) button");

lichteKnop.addEventListener("click", wordtLicht);

function wordtLicht(event) {
  document.documentElement.classList.remove("colorModeChange");
  document.body.classList.remove("toonMenu");
}



var donkereKnop = document.querySelector("header nav ul li:last-of-type button");

donkereKnop.addEventListener("click", wordtDonker);

function wordtDonker(event) {
  document.documentElement.classList.add("colorModeChange");
  document.body.classList.remove("toonMenu");
}




// FORM NAVIGATIE 

// var verblijfTicketsKnop = document.querySelector("main section section div button:first-of-type");
// var ticketsKnop = document.querySelector("main section section div button:last-of-type");

// verblijfTicketsKnop.addEventListener("click", verblijfTickets);
// ticketsKnop.addEventListener("click", tickets);

// function verblijfTickets() {
//   document.documentElement.classList.add("showVerblijfTickets");
//   document.documentElement.classList.remove("showTickets");
//   console.log("laat verblijf + tickets zien");
// }

// function tickets() {
//   document.documentElement.classList.toggle("showTickets");
//   document.documentElement.classList.toggle("showVerblijfTickets");
//   console.log("laat tickets zien");
// }

// var ticketsKnop = document.getElementById("formNav").querySelector(" button:last-of-type ");

var verblijfTicketsKnop = document.querySelector(".formNav button:first-of-type");
var ticketsKnop = document.querySelector(".formNav button:last-of-type");


// var verblijfTicketsKnop = document.querySelector("main section section div button:first-of-type");
// var ticketsKnop = document.querySelector("main section section div button:last-of-type");

verblijfTicketsKnop.addEventListener("click", verblijfTickets);
ticketsKnop.addEventListener("click", tickets);

function verblijfTickets(event) {
  document.body.classList.add("showVerblijfTickets");
  document.body.classList.remove("showTickets");
  console.log("laat verblijf + tickets zien");
}

function tickets(event) {
  document.body.classList.add("showTickets");
  document.body.classList.remove("showVerblijfTickets");
  console.log("laat tickets zien");
}





// VERDER LEZEN
// var verderButton = document.querySelector("#verderLezen button");
// var verderTekst = document.querySelector("#verderLezen p");

// verderButton.addEventListener("click", leesVerder);

// function leesVerder() {
//   if (verderTekst.innerHTML === "Sommige shows en parades in de parken kunnen worden gewijzigd, vertraagd of geannuleerd zonder dat wij de gasten vooraf hierover kunnen informeren. ...") {
//     verderTekst.innerHTML = "Sommige shows en parades in de parken kunnen worden gewijzigd, vertraagd of geannuleerd zonder dat wij de gasten vooraf hierover kunnen informeren. Dit kan het gevolg zijn van slecht weer, belangrijke werkzaamheden, wijzigingen van openingstijden of sluiting van attracties. Gelukkig zijn er altijd allerlei andere fantastische attracties en activiteiten. Vraag gerust onze Cast Members (Disney medewerkers) om meer informatie!";
//     verderButton.innerHTML = "Toon minder";
//   }

//   else {
//     verderTekst.innerHTML = "Sommige shows en parades in de parken kunnen worden gewijzigd, vertraagd of geannuleerd zonder dat wij de gasten vooraf hierover kunnen informeren. ...";
//     verderButton.innerHTML = "Verder lezen";
//   }
// }





// OPENINGSTIJDEN 
// Bron: https://tecadmin.net/get-current-date-time-javascript/

// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// var deTijd = document.querySelector("#openingstijden");

// const d = new Date();
// var date = new Date();
// date.toLocaleDateString('es-MX');


// var date = new Date();


// const d = new Date("January 25 2015");
// d.toDateString('nl-NL');
// let text = d.toLocaleDateString('nl-NL');

// document.getElementById("openingstijden").innerHTML = d;