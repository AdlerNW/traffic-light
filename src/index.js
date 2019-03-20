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
    if (secondsLeft == 0){
        animation();
    }

    if (secondsLeft == 3){
        if (activeR) lightRed.style.animation = 'animStop 1s linear 3';
        if (activeG) lightGreen.style.animation = 'animGo 1s linear 3';
    }


    timer.textContent = secondsLeft--;
}

function animation(){
    if (activeR) {
        secondsLeft = 3;
        lightYellow.style.animation = 'animReady 1s linear 3';
        lightRed.style.animation = 'none';
        lightGreen.style.animation = 'none';
    }
    if (activeY) {
        secondsLeft = 15;
        lightRed.style.animation = 'none';
        lightYellow.style.animation = 'none';
        lightGreen.style.animation = 'none';
    }
    if (activeG) {
        secondsLeft = 10;
        lightRed.style.animation = 'none';
        lightYellow.style.animation = 'none';
        lightGreen.style.animation = 'none';
    }
}