import "./index.scss";

let lightRed = null,
    lightYellow = null,
    lightGreen = null,
    timer = null,
    secondsLeft = 9,
    activeR = true,
    activeY = false,
    activeG = false;

window.onload = function(){
    lightRed = document.querySelector('.redLight');
    lightYellow = document.querySelector('.yellowLight');
    lightGreen = document.querySelector('.greenLight');
    timer = document.querySelector('.timer');

    setInterval(time, 1000);
    stop();
}

function stop(){
    activeR = true;
    activeY = false;
    activeG = false;

    lightRed.style.opacity = '1';
    lightGreen.style.opacity = '0.1';
    setTimeout(ready, 10000);
}

function ready(){
    activeR = false;
    activeY = true;
    activeG = false;

    lightRed.style.opacity = '0.1';
    lightYellow.style.opacity = '1';
    setTimeout(go, 3000);
}

function go(){
    activeR = false;
    activeY = false;
    activeG = true;

    lightYellow.style.opacity = '0.1';
    lightGreen.style.opacity = '1';
    setTimeout(stop, 15000);
}

function time(){
    if (secondsLeft == 0 && activeR){
        secondsLeft = 3;
    }

    if (secondsLeft == 0 && activeY){
        secondsLeft = 15;
    }

    if (secondsLeft == 0 && activeG){
        secondsLeft = 10;
    }
    timer.textContent = secondsLeft--;
}