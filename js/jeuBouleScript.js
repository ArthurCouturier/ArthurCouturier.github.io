let xPos = 100;
var ok = true;

let compteurVal = 0;
let bestVal = 0;

var circle = document.querySelector("#circle");
circle.addEventListener('click', touched);

var animateButton = document.querySelector("#move");
animateButton.addEventListener('click', animate, {once: true});

var playPauseButton = document.querySelector("#playPauseMove");
playPauseButton.addEventListener('click', pausePlayAnim);


function pausePlayAnim() {
    if (ok) {
        ok = false;
    } else {
        ok = true;
    }
}

function animate() {
    if (ok) {
        xPos += 10;
    }
    circle.style.transform = `translate3d(${xPos}px, 0, 0)`;

    if (Math.abs(xPos) >= 500) {
        xPos = -100;
        compteurVal = 0;
    }
    actualizeScore();
    requestAnimationFrame(animate);
}

function actualizeScore() {
    document.getElementById("compteur").innerHTML = compteurVal;
}

function touched() {
    compteurVal += 1;
    document.getElementById("circle").style.color = "blue";

    if (compteurVal > bestVal) {
        bestVal = compteurVal;
        setBestVal();
    }
    if (!ok) {
        compteurVal = 0;
    }
}

function setBestVal() {
    document.getElementById("best").innerHTML = bestVal;
}
