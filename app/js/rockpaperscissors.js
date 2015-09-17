////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move = move || getInput();
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var playerMove = playerMove || getPlayerMove();
    var computerMove = computerMove || getComputerMove();
    var playerNumber = 0;
    var computerNumber = 0;

    console.log(playerMove);
    console.log(computerMove);
    // Associate playerMove with a number
    if (playerMove == 'rock') {
        playerNumber = 0;
    }
    else if (playerMove == 'paper') {
        playerNumber = 1;
    }
    else if (playerMove == 'scissors') {
        playerNumber = 2;
    }

    // Associate computerMove with a number
    if (computerMove == 'rock') {
        computerNumber = 0;
    }
    else if (computerMove == 'paper') {
        computerNumber = 1;
    }
    else if (computerMove == 'scissors') {
        computerNumber = 2;
    }

    var difference = ((playerNumber - computerNumber) % 3)
    // console.log(playerNumber);
    // console.log(computerNumber);
    // console.log(difference);
    if (difference == 0) {
        winner = 'tied';
    }
    else if (difference == -1 || difference == 2) {
        winner = 'computer';
    }
    else if (difference == -2 || difference == 1) {
        winner = 'player';
    }
    // if (playerMove == computerMove) {
    //     winner = 'tie';
    // } else if (playerMove == 'rock' && computerMove == 'paper') {
    //     winner = 'computer';
    // } else if (playerMove == 'rock' && computerMove == 'scissors') {
    //     winner = 'player';
    // } else if (playerMove == 'paper' && computerMove == 'rock') {
    //     winner = 'player';
    // } else if (playerMove == 'paper' && computerMove == 'scissors') {
    //     winner = 'computer'
    // }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 4;
    var computerWins = 4;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    while ((playerWins < 5) && (computerWins < 5)) {
        var play = getWinner();

        if (play == 'player') {
            playerWins += 1;
            console.log([playerWins, computerWins]);
        }
        else if (play == 'computer') {
            computerWins += 1;
            console.log([playerWins, computerWins]);
        }
        else {
            console.log('tie');
            console.log([playerWins, computerWins]);
        }
    }
    return [playerWins, computerWins];
}

