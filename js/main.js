const inputNome = document.querySelector("[name='nomeUtente']");
const inputKm = document.querySelector("[name='kmUtente']");
const inputEta = document.querySelector("[name='etaUtente']");
const submitButton = document.getElementById("genera-biglietto");
const cancelButton = document.getElementById("annulla-biglietto");
const containerBiglietto = document.getElementById("container-biglietto");

submitButton.addEventListener("click", function() {
    const kmDaPercorrere = parseInt(inputKm.value);
    let prezzoAlKm = 0.21;
    if (kmDaPercorrere >= 1200) {
        alert("Inserisci un kilometraggio idoneo");
    } else if (kmDaPercorrere <= 10) {
        alert("Inserisci un kilometraggio idoneo");
    }
    if (inputEta.value === "minorenne") {
        prezzo = prezzoAlKm / 100 * 80;
        nomeOfferta = "Sconto Minorenni";
    } else if (inputEta.value === "over65") {
        prezzo = prezzoAlKm / 100 * 60;
        nomeOfferta = "Sconto Over 65";
    } else if (inputEta.value === "maggiorenne") {
        prezzo = prezzoAlKm;
        nomeOfferta = "Biglietto Standard"
    }
    document.getElementById("container-biglietto").classList.remove("d-none");
    document.getElementById("OutputNome").innerHTML = inputNome.value;
    document.getElementById("OutputOfferta").innerHTML = nomeOfferta;
    document.getElementById("OutputCarrozza").innerHTML = (Math.floor(Math.random() * 9) + 1);
    document.getElementById("OutputCodice").innerHTML = (Math.floor(Math.random() * 10000) + 1);
    document.getElementById("OutputCosto").innerHTML = (prezzo * kmDaPercorrere).toFixed(2);

    }
);

cancelButton.addEventListener("click", function() {
    inputNome.value = "";
    inputKm.value = "";
    document.getElementById("container-biglietto").classList.add("d-none");
}
);