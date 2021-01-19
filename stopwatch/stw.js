window.onload = function() {

    let seconds = 00;
    let tens = 00;
    let appendseconds = document.getElementById("seconds")
    let appendtens = document.getElementById("tens")
    
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");
    let Interval;


    ////버튼을 눌렀을 때////
start.onclick = function (){
    clearInterval(Interval);
    Interval = setInterval(starttimer, 10);   
    }

stop.onclick = function(){
    clearInterval(Interval);
    }



reset.onclick = function(){
    clearInterval(Interval);

    tens = "00";
    seconds = "00";
    appendtens.innerHTML = tens;
    appendseconds.innerHTML = seconds;
    }




////타이머 숫자////
function starttimer(){

    tens++;

    if (tens < 9){
        appendtens.innerHTML = "0" + tens;
    }

    if (tens > 9){
        appendtens.innerHTML = tens;
    }
    
    if (tens > 99){
        console.log("seconds");
        seconds++;
        appendseconds.innerHTML = "0" + seconds;
        tens = 0;
        appendtens.innerHTML = "0" + 0;
    }

    if (seconds > 9){
        appendseconds.innerHTML = seconds;
    }

}
}