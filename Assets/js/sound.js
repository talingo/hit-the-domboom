/* const music = new Audio('adf.wav');
music.play();
music.loop =true;
music.playbackRate = 2;
music.pause(); */
/* 
var audio = new Audio('audio.mp3');
  audio.play(); */

const bombo = document.querySelector('#hitd');
bombo.addEventListener('click',function (ev) {    
  alert('click')
  if (ev.target.tagName === 'img'){
    alert(ev)
    var audio = new Audio('./Assets/sound/bombo (1).wav');
    audio.play();
  }
 
},
false
);

let hitted = document.querySelectorAll ('.hit')