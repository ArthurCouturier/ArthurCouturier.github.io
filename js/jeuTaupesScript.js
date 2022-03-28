class Taupe {
    constructor(id) {
        this.id = id;
        this.minus;
        this.stopDate;
        this.startDate = Date.now();
    }

    apparaitre() {
        this.isPresent = true;
        document.getElementById("Taupe"+parseInt(this.id)).style.backgroundColor = 'red';
    }

    disparaitre() {
        this.isPresent = false;
    }

    startTime() {
        /*this.startDate = Date.now();*/
        document.getElementById("Taupe"+parseInt(this.id)).style.backgroundColor = 'red';
    }

    touched() {
        this.stopDate = Date.now();
        this.minus = this.stopDate - this.startDate;
        console.log(this.startDate);
        console.log(this.stopDate);
        console.log(this.minus);
        this.minus = Date.now() - this.startDate;
        score = score - this.minus;
        updateScore();
    }
}

const nbTaupes = 16;
const nbLignes = 4;
let score = 10000;
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
            /*taupes.push(new Taupe(nbLignes*i + j));*/
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
    taupes = [];
    jouer();
    updateScore();
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
    var idT;
    while (!tirage) {
        idT = Math.floor(16 * Math.random());
        if (!taupesSorties.includes(idT)) {
            tirage = true;
            taupesSorties.push(idT);
        }
    }
    let taupe = new Taupe(idT);
    taupes.push(taupe);
    /*getTaupe(idT).style.backgroundColor = 'pink';*/
    taupe.startTime();
    getTaupe(idT).addEventListener('click', taupe.touched, {once: true});
}

function updateScore() {
    if (score > 0) {
        document.getElementById("compteur").innerText = "Points: "+parseInt(score);
    } else {
        document.getElementById("compteur").innerText = "Points: "+parseInt(0);
    }
}
