"use strict";

//------------JS TIL MAP:HTML----------------

// Denne funktion tager header og content og skriver det ud på pop-up dialogboksen. Den fjerner også "hidden class".
//let contentHtml laver en linebreak, så hver gang der bliver skrevet en linje og der skal være et break skriver man \n\r

function MapPopUp(header, content) {
    PopUpDiv.classList.remove('hidden');
    PopUpHeader.innerHTML = header;
    let contentHtml = '';
    content.split('\n\r').forEach(c => {
        contentHtml += `<p>${c.trim()}</p>`;
    });
    PopUpContent.innerHTML = contentHtml;
}

// Denne funktion fjerner dialogboksen igen.
function CloseMapPopUp() {
    PopUpDiv.classList.add("hidden");
    PopUpHeader.innerHTML = "";
    PopUpContent.innerHTML = "";
}

//------------JS TIL MAP:HTML----------------
//Gemmer pop-up div objektet
var PopUpDiv = document.getElementById("popUp");
var PopUpHeader = document.getElementById("popUpHeader");
var PopUpContent = document.getElementById("popUpContent");
