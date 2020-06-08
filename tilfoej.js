// Tilføher +1 eller -1 værdi til det antal vine man ønsker at købe
const antal = document.getElementById("antal");
document.getElementById("op").addEventListener("click", function () {
    antal.value = parseInt(antal.value) + 1;
})

document.getElementById("ned").addEventListener("click", function () {
    antal.value = parseInt(antal.value) - 1;
})
