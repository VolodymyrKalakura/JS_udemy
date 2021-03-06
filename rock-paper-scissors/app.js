const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WIN';
const RESULT_COMPUTER_WINS = 'COMPUTER_WIN';

let runningGame = false;

const getPayerChoice = () => {
    const playerChoice = prompt(`Choice ${ROCK}, ${PAPER} or ${SCISSORS}`,'').toUpperCase();
    if (playerChoice !== ROCK &&
        playerChoice !== PAPER &&
        playerChoice !== SCISSORS
        ) {
            alert(`Choice is not valid! We chose for you ${DEFAULT_PLAYER_CHOICE}`);
            return DEFAULT_PLAYER_CHOICE;
        }
        return playerChoice;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) => {
    if(cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (cChoice === ROCK && pChoice === PAPER ||
               cChoice === PAPER && pChoice === SCISSORS ||
               cChoice === SCISSORS && pChoice === ROCK
        ) {
            return RESULT_PLAYER_WINS;
        } else {
            return RESULT_COMPUTER_WINS;
        }
};

startGameBtn.addEventListener('click', () => {
    if(runningGame){
        return;
    }
    runningGame = true;
    const playerChoise = getPayerChoice();
    const computerCoice = getComputerChoice();
    const winner = getWinner(computerCoice, playerChoise);
    let massage = `You picked ${playerChoise}, computer picked ${computerCoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        massage = massage + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        massage = massage + 'won.';
    } else {
        massage = massage + 'lost.';
    }
    alert(massage);
    runningGame = false;
});