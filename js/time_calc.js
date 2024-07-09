let startTimer = document.querySelector('#start-timer')
let timeButton = document.querySelector('.time-button__calculator')
let inputTime = document.querySelector('.input-time__calculator')
let timeP = document.querySelector('.time-calc__time')

function calculateTime() {
    let inputValue = parseInt(document.getElementById('start-timer').value);

    let days = Math.floor(inputValue / 86400);
    let hours = Math.floor((inputValue % 86400) / 3600);
    let minutes = Math.floor((inputValue % 3600) / 60);
    let seconds = inputValue % 60;
    let timeOutput = document.querySelector('.time-calc__time');
    timeOutput.textContent = ` ${days}дн   ${hours}:${minutes}:${seconds}`;
    let calculatorTimeInput = document.querySelector(".input-time__calculator").value = ""
}

document.querySelector('.time-button__calculator').addEventListener('click', calculateTime);