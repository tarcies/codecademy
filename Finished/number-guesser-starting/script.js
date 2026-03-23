let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
    if (userGuess < 0 || userGuess > 9) return alert('Input out of bounds');
    return getAbsoluteDistance(targetNumber, userGuess) <= getAbsoluteDistance(targetNumber, computerGuess);
}

function getAbsoluteDistance(num1, num2) {
    return Math.abs(num1 - num2);
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        console.log('Invalid winner');
    }
}

function advanceRound() {
    currentRoundNumber++;
}