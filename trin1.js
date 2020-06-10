"use strict";
//API og liste

//API til at finde alle vejnavne i Danmark

fetch("https://dawa.aws.dk/vejnavne")
    .then(function (data) {
        return data.json();
    })

    .then(function (json) {
        console.log(json[0])
        for (let i = 0; i < json.length; i++) {
            document.getElementById("adresser").insertAdjacentHTML("afterbegin", "<option>" + json[i].navn + "</option>");
        }

    })

//API til at finde alle postnumre i Danmark

fetch("https://dawa.aws.dk/postnumre")

    .then(function (data) {
        return data.json();
    })

    .then(function (json) {

        for (let i = 0; i < json.length; i++) {
            document.getElementById("postnr").insertAdjacentHTML("afterbegin", "<option>" + json[i].nr + " " + json[i].navn + "</option>");
        }


    })

//Selve købsprocessen

const brugernavn = document.getElementById("navn");
const brugeradr = document.getElementById("adresse");
const postnrogby = document.getElementById("pogb");
const brugeremail = document.getElementById("email")
const leveringsmuligheder = document.getElementsByName("levering");
const betalingsmuligheder = document.getElementsByName("betaling");
const knap = document.getElementById("knap");


//SessionStorage bruges til at gemme de valg man tager gennem id.

knap.addEventListener("click", function () {
    sessionStorage.setItem("navn", brugernavn.value);
    sessionStorage.setItem("adresse", brugeradr.value);
    sessionStorage.setItem("postnrogby", postnrogby.value);
    sessionStorage.setItem("email", brugeremail.value);
    sessionStorage.setItem("levering", leveringsmuligheder.value);
    sessionStorage.setItem("betaling", betalingsmuligheder.value);

    for (let i = 0; i < leveringsmuligheder.length; i++) {
        if (leveringsmuligheder[i].checked === true) {
            sessionStorage.setItem("levering", leveringsmuligheder[i].value)
        }
    }

    for (let i = 0; i < betalingsmuligheder.length; i++) {
        if (betalingsmuligheder[i].checked === true) {
            sessionStorage.setItem("betaling", betalingsmuligheder[i].value)
        }
    }
    location.href = "kvittering.html";
})
