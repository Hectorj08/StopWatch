window.onload = function () {
  
  let seconds = 00; 
  let tens = 00;
  let minutes = 00; 
  let hours = 00;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let appendMinutes = document.getElementById("minutes");
  let appendHours = document.getElementById("hours");
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var buttonLap = document.getElementById('button-lap');
  var Interval ;

 let Laps = document.getElementById('lapRecord');


  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    minutes = "00";
    hours = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
    Laps.innerHTML = "";
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 10){
      appendTens.innerHTML = "0" + tens;
    }else{
      appendTens.innerHTML = tens;
    }
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = seconds;
      tens=0;
      appendTens.innerHTML = "0" + tens;
    
    if(seconds > 59){
        console.log("minutes");
        minutes++;
        appendMinutes.innerHTML = minutes;
        seconds = 0;
    
    if(minutes > 60){
      console.log("hours");
        hours++;
        appendHours = hours;
        minutes = 0;
    }
   } 
  }
    if (seconds < 10){
      appendSeconds.innerHTML = seconds;
    }
    if (minutes > 59){
    appendMinutes.innerHTML = minutes;
    }
    if (hours > 10) {
        appendHours = "0" + hours;
    } else {
        appendHours = hours;
    }
}
buttonLap.onclick = function(){
    Laps.innerHTML += "<li>" + appendHours + " : " + appendMinutes.innerHTML + " : " + appendSeconds.innerHTML + " : " + appendTens.innerHTML + "</li>";
  }
  

}
