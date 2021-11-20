//Identify UI Buttons
const gameButtons = document.getElementsByClassName('gameButton');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const playerButtonIcon = document.getElementById('playerButtonIcon');
const computerButtonIcon = document.getElementById('computerButtonIcon');
const playerButton = document.querySelector('.playerResultButton')
const computerButton = document.querySelector('.computerResultButton')
const scissorsButton = document.getElementById('scissors');
const computerResult = document.getElementById('computerResult');
const playerResult = document.getElementById('playerResult');
const roundResult = document.getElementById('roundResult');
const playerScoreText = document.getElementById('playerScoreText');const computerScoreText = document.getElementById('computerScoreText');
const playAgainButton = document.querySelector('.playAgain');

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let roundWinner = '';


function getPlayerSelection (playerInput) {
    playerSelection = playerInput;
}

playAgainButton.addEventListener('click', () => {
    resetGame();
})

 {
    rockButton.addEventListener('click', () => {
        getPlayerSelection('Rock');
        if (playerScore < 5 && computerScore < 5) {
            game();
        }
    });

    paperButton.addEventListener('click', () => {
        getPlayerSelection('Paper');
        if (playerScore < 5 && computerScore < 5) {
            game();
        }
    });
        
    scissorsButton.addEventListener('click', () => {
        getPlayerSelection('Scissors');
        if (playerScore < 5 && computerScore < 5) {
            game();
        }
    });
}

function game() {
    resetRound();
    computerSelection = computerPlay();
    computerResult.textContent = computerSelection;

    playerResult.textContent = playerSelection;

    updateIcons(playerSelection, computerSelection);

    roundResult.textContent = (playRound(playerSelection, computerSelection));
    score();
}

function resetRound() {
    playerButton.classList = 'resultButton playerResultButton';
    computerButton.classList = 'resultButton computerResultButton';
}

function updateIcons(playerSelection, computerSelection) {
    const playerIcon = `fa-hand-${playerSelection.toLowerCase()}`;
    const computerIcon = `fa-hand-${computerSelection.toLowerCase()}`;

    playerButtonIcon.classList = `far ${playerIcon} active`
    computerButtonIcon.classList = `far ${computerIcon} active`
}

//This function adds the score up
function score() {
    computerScoreText.textContent = ('Computer: ' + computerScore);
    playerScoreText.textContent = ('Player: ' + playerScore);
}


//The computer randomly picks between Rock, Paper, and Scissors
function computerPlay() {
    let randomNum = Math.floor(1 + Math.random() * 3);
    if (randomNum == 1) {
        return 'Rock';
    } else if (randomNum == 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
    
}

//The code checks to see who wins the round
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'Rock' && computerSelection == 'Paper') ||
        (playerSelection == 'Scissors' && computerSelection == 'Rock') ||
        (playerSelection == 'Paper' && computerSelection == 'Scissors')) {
        computerScore++;
        if (computerScore < 5) {
            roundWinner = "Computer";
            playerButton.classList.add('lose');
            computerButton.classList.add('win');
            return ('You lose! ' + computerSelection + ' beats ' + playerSelection);
        } else {
           return endGame('player');
        }
    }
    
    if ((playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        playerScore++;
        if (playerScore < 5) {
            roundWinner = "Player";
            playerButton.classList.add('win');
            computerButton.classList.add('lose');
            return ('You win! ' + playerSelection + ' beats ' + computerSelection);
        } else {
            return endGame('computer');
        }
    }

    if (playerSelection === computerSelection) {
        roundWinner = '';
        playerButton.classList.add('tie');
        computerButton.classList.add('tie');
        return 'It\'s a tie!'
    }
   
}


function endGame(winner) {
    playAgainButton.style.display = "initial";
    if (winner == 'player') {
        return "The computer has won the game. Try again next time :)";
    } else if (winner == 'computer') {
        return "You won the game and are the greatest Rock-Paper-Scissors player in the history of the universe!"
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    score();
    roundResult.textContent = "First to 5 wins! Select an icon to get started!"
    playAgainButton.style.display = "none";
    playerButtonIcon.classList = "fas fa-question";
    computerButtonIcon.classList = "fas fa-question";
}