
// FORM NAVIGATIE 

var verblijfTicketsKnop = document.querySelector(".formNav button:first-of-type");
var ticketsKnop = document.querySelector(".formNav button:last-of-type");

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