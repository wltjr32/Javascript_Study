const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
const grid = document.querySelector(".grid")
const mole = document.querySelector(".mole")
var square;
let result = 0;
let targetPosition = null;
let currentTime = 60;
let timer;
let countdownTimer;

for (let i=0; i<9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}

const square = document.querySelectorAll(".square")

function randomSquare() {
    square.forEach(function(square) {
        square.classList.remove('mole')
    })
    let randomNumber = Math.floor(Math.random() * 9)
    targetPosition = randomNumber;
    let randomSquare = square[randomNumber];
    randomSquare.classList.add('mole')
}

function moveInterval() {
    timer = setInterval(randomSquare, 1000)
}

moveInterval()

for (let i=0; i < 9; i++) {
    squares[i].addEventListener('mousedown', function() {
        if(i === targetPosition) {
            result++
            score.textContent = result
            targetPosition = null;
        }
    })
}

function countdown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0) {
        clearInterval(timer)
        clearInterval(countdownTimer)
        alert("GAME OVER! Score :" + result)
    }
}

countdownTimer = setInterval(countdown, 1000)