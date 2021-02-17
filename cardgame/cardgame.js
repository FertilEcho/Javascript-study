


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
let seconds = 00; 
let tens = 00; 
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let Interval;



function shuffle(buttons){
    var j, x, i;
    for (i = buttons.length; i; i -= 1){
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j]; 
        a[j] = x;
    }
}
shuffle(buttons)




buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {  //event
        console.log(e.target);
        if (e.target.id === 'yellow') {
            span.style.background = e.target.id;
        }
        if (e.target.id === 'red') {
            span.style.background = e.target.id;
        }
        if (e.target.id === 'blue') {
            span.style.background = e.target.id;
        }
        if (e.target.id === 'green') {
            span.style.background = e.target.id;
        }
    })
})





function startTimer () {
    tens++; 
      
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
      
    if (tens > 9){
      appendTens.innerHTML = tens;
        
    } 
      
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
      
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    
  }