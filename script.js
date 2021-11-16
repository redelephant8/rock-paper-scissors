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

let playerScore = 0;
let computerScore = 0;

//The code checks to see who wins the round
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Scissors' && computerSelection == 'Rock') || (playerSelection == 'Paper' && computerSelection == 'Scissors')) {
        computerScore++;
        return ('You lose! ' + computerSelection + ' beats ' + playerSelection)
    } else if ((playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        playerScore++;
        return ('You win! ' + playerSelection + ' beats ' + computerSelection);
    } else if (playerSelection === computerSelection) {
            return 'It\'s a tie!'
    } else {
        computerScore++;
        return 'Invalid input';
        }
}

    //The user is instructed to enter either rock, paper, or scissors
    function playerPlay() {
        originalThrow = prompt("Enter either Rock, Paper, or Scissors: ").toLowerCase();
        return originalThrow.charAt(0).toUpperCase() + originalThrow.slice(1)
    }

    //The game is run 5 times and after the 5th time, the final score is announced
    function game() {
        for (i = 0; i < 5; i++) {
            let computerSelection = computerPlay();
            let playerSelection = playerPlay();
            console.log('The computer threw: ' + computerSelection);
            console.log('You threw: ' + playerSelection);
            console.log(playRound(playerSelection, computerSelection));
            console.log("");

            if (i == 4) {
                console.log('Player Score: ' + playerScore);
                console.log('Computer Score: ' + computerScore);
                if (playerScore > computerScore) {
                    console.log("You won the game! Congratulations!");
                } else if (computerScore > playerScore) {
                    console.log("The computer won the game. Better luck next time :)");
                } else {
                    console.log("The game ended in in a tie. Play again to find the true winner!");
                }
            }
        }
    }

game();