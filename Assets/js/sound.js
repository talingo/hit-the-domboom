/* const music = new Audio('adf.wav');
music.play();
music.loop =true;
music.playbackRate = 2;
music.pause(); */
/* 
var audio = new Audio('audio.mp3');
  audio.play(); */

const bombo = document.querySelector('#bombo');
bombo.addEventListener('click',function () {    
  alert('click')    
  var audio = new Audio('./Assets/sound/bombo (1).wav');
  audio.play();  
},
false
);

/* hit mobile */

const hitm = document.querySelector('#hitm');
hitm.addEventListener('click',function () {    
  alert('click')    
  var audio = new Audio('./Assets/sound/bombo (1).wav');
  audio.play();  
},
false
);