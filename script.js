'use strict';

const dice = document.getElementById("dice");
const p1CurScore = document.getElementById("current--1");
const p2CurScore = document.getElementById("current--2");
const p1Score = document.getElementById("score--1");
const p2Score = document.getElementById("score--2");
const p1Sec = document.getElementById("player1sec");
const p2Sec = document.getElementById("player2sec");

var randomNum;
var currentPlayer = 1;
var curr1Score = 0;
var curr2Score = 0;
var total1Score = 0;
var total2Score = 0;
var playing = true;


var genRandomNum = () => Math.floor(Math.random() * 6) + 1;

function updateCurrentScore(score) {
    dice.classList.remove('hidden');
    dice.src = `./dice-${randomNum}.png`;
    if (currentPlayer == 1) {
        curr1Score += score;
        console.log(curr1Score, score);
        p1CurScore.textContent = curr1Score;
    } else {
        curr2Score += score;
        console.log(curr2Score, score);
        p2CurScore.textContent = curr2Score;
    }
}

function rollIt() {
    if (playing) {
        randomNum = genRandomNum();
        console.log(randomNum);
        if (randomNum == 1 && currentPlayer == 1) {
            curr1Score = 0;
            p1CurScore.textContent = 0;
            p1Sec.classList.remove('player--active');
            p2Sec.classList.add('player--active');
            currentPlayer = 2;
        } else if (randomNum == 1 && currentPlayer == 2) {
            curr2Score = 0;
            p2CurScore.textContent = 0;
            p2Sec.classList.remove('player--active');
            p1Sec.classList.add('player--active');
            currentPlayer = 1;
        } else {
            updateCurrentScore(randomNum);
        }
    }
}

function holdIt() {
    if (playing) {
        if (currentPlayer == 1) {
            total1Score += curr1Score;
            if (total1Score >= 100) {
                playing = false;
                dice.classList.add('hidden');
                console.log("Player 1 is the Winner!");
                curr1Score = 0;
                p1CurScore.textContent = 0;
                p1Score.textContent = total1Score;
                p1Sec.classList.remove('player--active');
                p1Sec.classList.add('player--winner');

            } else {
                curr1Score = 0;
                p1Score.textContent = total1Score;
                currentPlayer = 2;
                p1CurScore.textContent = 0;
                p1Sec.classList.remove('player--active');
                p2Sec.classList.add('player--active');
            }

        } else if (currentPlayer == 2) {
            total2Score += curr2Score;
            if (total2Score >= 100) {
                playing = false;
                dice.classList.add('hidden');
                console.log("Player 2 is the Winner!");
                curr2Score = 0;
                p2CurScore.textContent = 0;
                p2Score.textContent = total2Score;
                p2Sec.classList.remove('player--active');
                p2Sec.classList.add('player--winner');
            } else {
                curr2Score = 0;
                p2Score.textContent = total2Score;
                currentPlayer = 1;
                p2CurScore.textContent = 0;
                p2Sec.classList.remove('player--active');
                p1Sec.classList.add('player--active');
            }

        }
    }
}

function newGame() {
    playing = true;
    curr1Score = 0;
    curr2Score = 0;
    total1Score = 0;
    total2Score = 0;
    if (currentPlayer == 1) {
        p1Sec.classList.remove('player--winner');
    } else {
        p2Sec.classList.remove('player--winner');
    }
    p1CurScore.textContent = 0;
    p1Score.textContent = 0;
    p2CurScore.textContent = 0;
    p2Score.textContent = 0;
    currentPlayer = 1;
    p2Sec.classList.remove('player--active');
    p1Sec.classList.add('player--active');
    dice.classList.add('hidden');
}
// ohm hari sri ganapathaye namah