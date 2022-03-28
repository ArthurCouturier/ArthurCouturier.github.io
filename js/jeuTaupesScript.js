class Taupe {
    constructor(id) {
        this.id = id;
        this.diff;
        this.stopDate;
        this.startDate = Date.now();
    }

    apparaitre() {
        document.getElementById("Taupe"+parseInt(this.id)).style.backgroundColor = 'red';
    }

    touched() {
        this.stopDate = Date.now();
        this.diff = this.stopDate - this.startDate;
        score = score - this.diff;
        updateScore();
        document.getElementById("Taupe"+parseInt(this.id)).style.backgroundColor = 'green';
        taupesRestantes--;
        console.log(taupesRestantes);
        if (score > bestScore && taupesRestantes == 0) {
            bestScore = score;
            document.getElementById("best").innerText = "Meilleur: "+parseInt(bestScore);
        }
    }
}

const nbTaupes = 16;
const nbLignes = 4;
let score = 10000;
let bestScore = 0;
let taupesRestantes = 0;
let containers = []

function main() {
    var start = document.getElementById("startButton");
    start.addEventListener('click', startGame);
}

// Launched in jeuTaupes.html in contentContainer
function init() {
    // Initialisation des taupes
    for (i=0; i<nbLignes; i++) {
        for (j=0; j<nbTaupes/nbLignes; j++) {
            document.write("<div class=\"taupe\" id=\"Taupe"+ parseInt(nbLignes*i + j) +"\"></div>");
        }
    }
    containers = document.getElementsByClassName("taupe");
}

function getTaupe(idT) {
    return document.getElementById("Taupe"+parseInt(idT));
}

function startGame() {
    score = 10000;
    document.getElementById("compteur").innerText = "Points: "+parseInt(score);
    document.getElementById("best").innerText = "Meilleur: "+parseInt(bestScore);
    jouer();
    updateScore();
}

function jouer() {
    reinitTaupes();
    taupesSorties = [];

    function doSetTimeout(time) {

    }
    var nbTaupesASortir = 10;
    taupesRestantes = nbTaupesASortir;
    for (let i=0; i<nbTaupesASortir; i++) {
        setTimeout(function() {tirerTaupes(1, taupesSorties);}, i*500);
    }
}

function reinitTaupes() {
    for (k=0; k<nbTaupes; k++) {
        getTaupe(k).style.backgroundColor = 'blue';
    }
}

function tirerTaupes(nbTaupes, taupesSorties) {
    tirage = false;
    var idT;
    while (!tirage) {
        idT = Math.floor(16 * Math.random());
        if (!taupesSorties.includes(idT)) {
            tirage = true;
        }
    }
    let taupe = new Taupe(idT);
    taupesSorties.push(idT);
    taupe.apparaitre();
    getTaupe(idT).addEventListener('click', function() {taupe.touched();}, {once : true});
}

function updateScore() {
    if (score > 0) {
        document.getElementById("compteur").innerText = "Points: "+parseInt(score);
    } else {
        document.getElementById("compteur").innerText = "Points: "+parseInt(0);
    }
}
