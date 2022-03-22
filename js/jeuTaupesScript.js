class Taupe {
    isPresent = false;
    id;

    constructor(id) {
        this.id = id;
    }

    apparaitre() {
        this.isPresent = true;
    }

    disparaitre() {
        this.isPresent = false;
    }
}

const nbTaupes = 16;
const nbLignes = 4;
let score = 0;
let bestScore = 0;
let taupes = []
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
            taupes.push(new Taupe(nbLignes*i + j));
            document.write("<div class=\"taupe\" id=\"Taupe"+ parseInt(nbLignes*i + j) +"\"></div>");
        }
    }
    containers = document.getElementsByClassName("taupe");
}

function getTaupe(idT) {
    return document.getElementById("Taupe"+parseInt(idT));
}

function startGame() {
    document.getElementById("compteur").innerText = "Points: "+parseInt(score);
    document.getElementById("best").innerText = "Meilleur: "+parseInt(bestScore);
    jouer();
}

function jouer() {
    reinitTaupes();
    taupesSorties = [];

    function doSetTimeout(time) {

    }
    for (let i=0; i<10; i++) {
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
    while (!tirage) {
        taupe = Math.floor(16 * Math.random());
        if (!taupesSorties.includes(taupe)) {
            tirage = true;
            taupesSorties.push(taupe);
        }
    }
    getTaupe(taupe).style.backgroundColor = 'pink';
    getTaupe(taupe).addEventListener('click', touchable);
}

function touchable() {
    
}
