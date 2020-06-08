"use strict";

// Gør det muligt for brugeren at vælge lerverings type og føre det videre via sessionstorage til kviteringen
const leveringsmuligheder = document.getElementsByName("levering");
const knap = document.getElementById("knap");
const knap1 = document.getElementById("knap1");


knap.addEventListener("click", function () {
    for (let i = 0; i < leveringsmuligheder.length; i++) {
        if (leveringsmuligheder[i].checked === true) {
            sessionStorage.setItem("levering", leveringsmuligheder[i].value)
        }
    }
    location.href = "trin3.html";
})

knap1.addEventListener("click", function () {
    for (let i = 0; i < leveringsmuligheder.length; i++) {
        if (leveringsmuligheder[i].checked === true) {
            sessionStorage.setItem("levering", leveringsmuligheder[i].value)
        }
    }
    location.href = "trin1.html";
})
