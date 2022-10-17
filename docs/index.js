const WINNINGS = document.getElementById('winnings');
const LOSES = document.getElementById('loses');
const DRAWS = document.getElementById('draws');
const ROCK = document.getElementById('rock');
const PAPER = document.getElementById('paper');
const SCISSORS = document.getElementById('scissors');
const OPPONENTVALUE = document.getElementById('opponentValue');
const LOSEORWINORDRAW = document.getElementById('loseorwinordraw');

//RPS == Rock Paper Scissors
var rpsArray = [
    'rock',
    'paper',
    'scissors'
];

var winnings = 0;
var loses = 0;
var draws = 0;


ROCK.addEventListener('click', () => {
    console.log('The user pressed the rock button');
    evaluation(ROCK.value);
    consoleOutWinLoseDraw();
    drawOutWinnigsLosingDraws();
})

PAPER.addEventListener('click', () => {
    console.log('The user pressed the paper button');
    evaluation(PAPER.value);
    consoleOutWinLoseDraw();
    drawOutWinnigsLosingDraws();
})

SCISSORS.addEventListener('click', () => {
    console.log('The user pressed the scissors button');
    evaluation(SCISSORS.value);
    consoleOutWinLoseDraw();
    drawOutWinnigsLosingDraws();
})

//Determines if the player loses, wins, draws and draws out opponent's value
function evaluation(userInputValue) {
    var RPSRandomIndex = Math.floor((Math.random() * rpsArray.length));
    var RPSRandom = rpsArray[RPSRandomIndex];

    OPPONENTVALUE.textContent = null;
    OPPONENTVALUE.textContent += 'Your opponent choose: ' + RPSRandom;

    console.log('userInputValue is: ' + userInputValue);
    console.log('rpsrandom is: ' + RPSRandom);

    if (userInputValue === RPSRandom) {
        draws++;
        drawOutWinDrawLoseCurrent('draw');
        return;
    } else if (userInputValue === 'paper' && RPSRandom === 'rock') {
        winnings++;
        drawOutWinDrawLoseCurrent('win');
        return;
    } else if (userInputValue === 'paper' && RPSRandom === 'scissors') {
        loses++;
        drawOutWinDrawLoseCurrent('lose');
        return;
    } else if (userInputValue === 'rock' && RPSRandom === 'scissors') {
        winnings++;
        drawOutWinDrawLoseCurrent('win');
        return;
    } else if (userInputValue === 'rock' && RPSRandom === 'paper') {
        loses++;
        drawOutWinDrawLoseCurrent('lose');
        return;
    } else if (userInputValue === 'scissors' && RPSRandom === 'paper') {
        winnings++;
        drawOutWinDrawLoseCurrent('win');
        return;
    } else if (userInputValue === 'scissors' && RPSRandom === 'rock') {
        drawOutWinDrawLoseCurrent('lose');
        loses++;
        return;
    }


}

//Just writes win, lose, draw values to console
function consoleOutWinLoseDraw() {
    console.log('Winnings:' + winnings);
    console.log('Loses: ' + loses);
    console.log('Draws: ' + draws);
}

//Clears and updates win, lose, draw
function drawOutWinnigsLosingDraws() {
    WINNINGS.textContent = null;
    WINNINGS.textContent += "You won " + winnings + " time(s)";

    LOSES.textContent = null;
    LOSES.textContent = "You lost " + loses + " time(s)";

    DRAWS.textContent = null;
    DRAWS.textContent = "You drawed " + draws + " time(s)";
}

//Draws out what happend in the current round
function drawOutWinDrawLoseCurrent(situation) {
    LOSEORWINORDRAW.textContent = null;
    if (situation === 'lose') {
        LOSEORWINORDRAW.textContent += "You lost this round!"
    } else if (situation === 'draw') {
        LOSEORWINORDRAW.textContent += "This round was a draw!";
    } else if (situation === 'win') {
        LOSEORWINORDRAW.textContent += "You won this round!";
    }
}