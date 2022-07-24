const startStopBtn = document.querySelector('.startStopBtn');
const resetBtn = document.querySelector('.resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = 'stop';

const stopWatch = () => {
    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        leadingSeconds = '0' + seconds.toString();
    }
    else{
        leadingSeconds = seconds;
    }

    if(minutes < 10){
        leadingMinutes = '0' + minutes.toString();
    }
    else{
        leadingMinutes = minutes;
    }

    if(hours < 10){
        leadingHours = '0' + hours.toString();
    }
    else{
        leadingHours = hours;
    }

    const displayTimer = document.getElementById('timer').innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
}

startStopBtn.addEventListener('click', function() {
    const button = document.getElementsByClassName('startStopBtn');
    if(timerStatus === "stop"){
        timerInterval = window.setInterval(stopWatch, 1000);
        button.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = "start"
    }
    else{
        window.clearInterval(timerInterval);
        button.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = "stop";
    }
});

resetBtn.addEventListener('click', function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = '00:00:00';
});