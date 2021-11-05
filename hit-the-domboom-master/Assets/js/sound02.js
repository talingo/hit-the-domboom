
const bombo = document.querySelector('#hitbombo');
const crash = document.querySelector('#hitcrash');
const hithat = document.querySelector('#hithat');
const redo = document.querySelector('#hitredo');
const tom1 = document.querySelector('#hittom1');
const tom2 = document.querySelector('#hittom2');
const tom3 = document.querySelector('#hittom3');
const tom4 = document.querySelector('#hittom4');
const hitm = document.querySelector('#hitm');

document.addEventListener('click',function(e){
    if(e.target === bombo) {
        var audio = new Audio('./Assets/sound/bombo (1).wav');
        audio.play(); 
    }else if(e.target === crash) {
        var audio = new Audio('./Assets/sound/crash.wav');
        audio.play(); 
    }else if(e.target === hithat) {
        var audio = new Audio('./Assets/sound/hit-hat.wav');
        audio.play(); 
    }else if(e.target === redo) {
        var audio = new Audio('./Assets/sound/redoblante.wav');
        audio.play(); 
    }else if(e.target === tom1) {
        var audio = new Audio('./Assets/sound/tom1.wav');
        audio.play(); 
    }else if(e.target === tom2) {
        var audio = new Audio('./Assets/sound/tom2.wav');
        audio.play(); 
    }else if(e.target === tom3) {
        var audio = new Audio('./Assets/sound/tom3.wav');
        audio.play(); 
    }else if(e.target === tom4) {
        var audio = new Audio('./Assets/sound/tom4.wav');
        audio.play(); 
    }else if(e.target === hitm) {
        var audio = new Audio('./Assets/sound/bombo.wav');
        audio.play(); 
    }
})