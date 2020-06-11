"use strict";

//video - starter/pauser intro-videoen når man scroller
const AVIdListe = ["intro"];
const AVIndholdsliste = [];

AVIndholdsliste[0] = document.getElementById("intro")

window.addEventListener("scroll", function () {
    aktiverMultimedier();
});

//Slideshow - taget fra W3Schools
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // skifter billed hver 4 sek.
}

//Forside knapper konstanter

const knapmad = document.getElementById("button-mad");
const knapvinmagere = document.getElementById("button-vinmagere");

const knapsmagekasser = document.getElementById("button-smagekasse");

//Funktion forside knapper

knapmad.addEventListener("click", function () {
    location.href = "mad.html"
})



knapsmagekasser.addEventListener("click", function () {
    location.href = "smagkasser.html"
})

knapvinmagere.addEventListener("click", function () {
    location.href = "vinmagere.html"
})
