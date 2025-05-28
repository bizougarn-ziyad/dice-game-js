'use strict';

//scores
let score1 = 0;
let score2 = 0;
let currentScore = 0;
let player = 1;
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
player2.classList.remove('background');
const title = document.querySelector('.info');
const initScores = () => {
    document.querySelector('.score1').textContent = score1;
    document.querySelector('.score2').textContent = score2;
    document.querySelector('.currentScore1').textContent = currentScore;
    document.querySelector('.currentScore2').textContent = currentScore;
}

initScores();

//images

const diceImage = document.querySelector('#diceImage');


//buttons

//new Game Button

const newGame = document.querySelector('.newGame');

newGame.addEventListener('click', () => {
    score1, score2 = 0;
    currentScore = 0;
    initScores();
    diceImage.classList.add('hidden');
    message.textContent = '';
})

//Roll Dice Button 

const rollDice = document.querySelector('.rollDice');

const getScore = () => {
    let diceNumber = Math.floor(Math.random() * 6) + 1;
    if (diceNumber === 1) {
        currentScore = 0;
        if (player === 1) {
            document.querySelector(`.currentScore1`).textContent = currentScore;
            player = 2;
            diceImage.classList.add('hidden');
            player1.classList.remove('background');
            player2.classList.add('background');
            return;
        } else {
            document.querySelector(`.currentScore2`).textContent = currentScore;
            player = 1;
            diceImage.classList.add('hidden');
            player2.classList.remove('background');
            player1.classList.add('background');
            return;
        }
    }
    currentScore += diceNumber;
    diceImage.src = `dice-${diceNumber}.png`;
    diceImage.classList.remove('hidden');
    if (player === 1) {
        document.querySelector('.currentScore1').textContent = currentScore;
    } else {
        document.querySelector('.currentScore2').textContent = currentScore;
    }
}

rollDice.addEventListener('click', getScore)

//Hold Button 
const message = document.querySelector('.message');
const hold = document.querySelector('.hold');
hold.addEventListener('click', () => {

    if (player === 1) {
        score1 += currentScore;
        currentScore = 0;
        document.querySelector('.score1').textContent = score1;
        document.querySelector('.currentScore1').textContent = currentScore;
        player = 2;
        player1.classList.remove('background');
        player2.classList.add('background');
    } else {
        score2 += currentScore;
        currentScore = 0;
        document.querySelector('.score2').textContent = score2;
        document.querySelector('.currentScore2').textContent = currentScore;
        player = 1;
        player2.classList.remove('background');
        player1.classList.add('background');
    }

    if (score1 >= 50 || score2 >= 50) {
        score1 = 0;
        score2 = 0;
        currentScore = 0;
        initScores();
        diceImage.classList.add('hidden');
        player2.classList.remove('background');
        player1.classList.add('background');
        message.textContent = (player === 1) ? 'Congratulation 🎉 Player 2 is the winner' : 'Congratulation 🎉 Player 1 is the winner';
        title.textContent = '';

        setTimeout(() => {
            message.textContent = '';
            title.textContent = 'First to 50 Wins 🏆';
        }, 5000);
    }


});