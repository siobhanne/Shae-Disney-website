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




// VERDER LEZEN
var verderButton = document.querySelector("#verderLezen button");
var verderTekst = document.querySelector("#verderLezen p");

verderButton.addEventListener("click", leesVerder);

function leesVerder() {
    document.querySelector("#verderLezen p").innerHTML = "Sommige shows en parades in de parken kunnen worden gewijzigd, vertraagd of geannuleerd zonder dat wij de gasten vooraf hierover kunnen informeren. Dit kan het gevolg zijn van slecht weer, belangrijke werkzaamheden, wijzigingen van openingstijden of sluiting van attracties. Gelukkig zijn er altijd allerlei andere fantastische attracties en activiteiten. Vraag gerust onze Cast Members (Disney medewerkers) om meer informatie!";
    document.querySelector("#verderLezen button").innerHTML = "Toon minder";  
    verderButton.addEventListener("click", toonMinder);
    console.log("verder lezen");  
}

function toonMinder() {
  document.querySelector("#verderLezen p").innerHTML = "Sommige shows en parades in de parken kunnen worden gewijzigd, vertraagd of geannuleerd zonder dat wij de gasten vooraf hierover kunnen informeren. ...";
  document.querySelector("#verderLezen button").innerHTML = "Verder lezen";  
  console.log("Toon minder");

  verderButton.addEventListener("click", leesVerder);
}
