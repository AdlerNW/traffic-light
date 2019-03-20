import "./index.scss";

let lightRed = null,
    lightYellow = null,
    lightGreen = null;

window.onload = function(){
    lightRed = document.querySelector('.redLight');
    lightYellow = document.querySelector('.yellowLight');
    lightGreen = document.querySelector('.greenLight');

    stop();
}

function stop(){
    lightRed.style.opacity = '1';
    lightGreen.style.opacity = '0.1';
    setTimeout(ready, 10000);
}

function ready(){
    lightRed.style.opacity = '0.1';
    lightYellow.style.opacity = '1';
    setTimeout(go, 3000);
}

function go(){
    lightYellow.style.opacity = '0.1';
    lightGreen.style.opacity = '1';
    setTimeout(stop, 15000);
}

