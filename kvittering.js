"use strict";

// Indsamler data fra de tidligere indtastede oplysninger fra trin 1, trin 2 og trin 3 og samler det til den endelige kvitering
const kt = document.getElementById("kvittering");

kt.insertAdjacentHTML("beforeend", "<h4>Oplysninger: </h4>" + sessionStorage.getItem("navn") + "<br>");
kt.insertAdjacentHTML("beforeend", sessionStorage.getItem("adresse") + "<br>");
kt.insertAdjacentHTML("beforeend", sessionStorage.getItem("postnrogby") + "<br>");
kt.insertAdjacentHTML("beforeend", "<h4>Levering: </h4>" + sessionStorage.getItem("levering") + "<br>");
kt.insertAdjacentHTML("beforeend", "<h4>Betaling: </h4>" + sessionStorage.getItem("betaling") + "<br>");
