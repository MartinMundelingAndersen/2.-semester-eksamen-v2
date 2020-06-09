"use strict";

const kt = document.getElementById("kvittering");

kt.insertAdjacentHTML("beforeend", "<h4>Oplysninger: </h4>" + sessionStorage.getItem("navn") + "<br>");
kt.insertAdjacentHTML("beforeend", sessionStorage.getItem("adresse") + "<br>");
kt.insertAdjacentHTML("beforeend", sessionStorage.getItem("postnrogby") + "<br>");
kt.insertAdjacentHTML("beforeend", sessionStorage.getItem("email") + "<br>");
kt.insertAdjacentHTML("beforeend", "<h4>Levering: </h4>" + sessionStorage.getItem("levering") + "<br>");
kt.insertAdjacentHTML("beforeend", "<h4>Betaling: </h4>" + sessionStorage.getItem("betaling") + "<br>");
