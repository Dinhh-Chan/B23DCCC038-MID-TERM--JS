let timer;
let startTime, currentTime;

function startTimer() {
    let minutes = parseInt(document.getElementById('minutes').value);
    let seconds = parseInt(document.getElementById('seconds').value);
    startTime = currentTime = minutes * 60 + seconds;
    updateDisplay();
    if (timer) clearInterval(timer);
    timer = setInterval(function() {
        currentTime--;
        updateDisplay();
        if (currentTime <= 0) {
            clearInterval(timer);
            playSelectedAlarm();
            alert("Time's up!");
        }
    }, 1000);
}

function toggleAlarmSoundSelection() {
    let selector = document.getElementById('alarm-sound-selector');
    selector.style.display = (selector.style.display === 'none') ? 'block' : 'none';
}

function playSelectedAlarm() {
    let selectedSound = document.getElementById('alarm-sound-selector').value;
    let audio = new Audio(selectedSound);
    audio.play();
}

function updateDisplay() {
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    document.getElementById('display').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetTimer() {
    if (timer) clearInterval(timer);
    currentTime = startTime;
    updateDisplay();
}

function resetTimerALL() {
    if (timer) clearInterval(timer);
    currentTime = 0;
    updateDisplay();
}
function setTime(minutes) {
  document.getElementById('minutes').value = minutes;
  document.getElementById('seconds').value = 0;
  startTimer();  
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.5-mins').addEventListener('click', function() { setTime(5); });
  document.querySelector('.10-mins').addEventListener('click', function() { setTime(10); });
  document.querySelector('.15-mins').addEventListener('click', function() { setTime(15); });
  document.querySelector('.60-mins').addEventListener('click', function() { setTime(60); });
  document.querySelector('.120-mins').addEventListener('click', function() { setTime(120); });
});   