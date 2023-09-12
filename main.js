console.log('Hello World!');


window.addEventListener('load', function(){
  document.querySelector('.loder').style.display = 'none';
})


const hrH  = document.getElementById('hr');
const mnH  = document.getElementById('mn');
const scH  = document.getElementById('sc');


function clTc(){
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const minutes = (seconds + date.getMinutes()) / 60;
  const hours = (minutes + date.getHours()) / 12;
  
  
  rotateClh(scH, seconds);
  rotateClh(mnH, minutes);
  rotateClh(hrH, hours);
  
  
  
  var ampm = date.getHours() <= 12 ? "🌤️" : "☁️";
  
  document.querySelector('.dt-h').innerHTML = ampm ;
  
}

function rotateClh(element, rotation){
  element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clTc, 1000);


