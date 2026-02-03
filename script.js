const przycisk = document.getElementById("mojPrzycisk");
const tekst = document.getElementById("wiadomosc");

przycisk.addEventListener("click", function() {
    tekst.innerHTML = "Brawo! JavaScript działa z osobnego pliku! 🚀";
    tekst.style.color = "#6c5ce7";
    tekst.style.fontWeight = "bold";
});