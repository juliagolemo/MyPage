const przycisk = document.getElementById("mojPrzycisk");
const tekst = document.getElementById("wiadomosc");

przycisk.addEventListener("click", function() {
    tekst.innerHTML = "Brawo! JavaScript działa z osobnego pliku! 🚀";
    tekst.style.color = "#e75cc93c";
    tekst.style.fontWeight = "bold";
});