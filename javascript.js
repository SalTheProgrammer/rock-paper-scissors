// the heart of rock-paper-scissors game

console.log("Let the game begins!")

let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
    let compChoice = "rock"; //default choice for computer

    compNumChoice = Math.floor(Math.random() * 3); // randomly return 0, 1, or 2

    if (compNumChoice == 0) {
        compChoice = "rock";
    } else if (compNumChoice == 1) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
    console.log("Computer choice: " + compChoice);
    return compChoice;
}

function getHumanChoice () {
    let humanChoice = "rock"; //default choice for human

    humanChoice = prompt("Choose rock, paper, or scissors");
    humanChoice = humanChoice.toLowerCase();

    console.log("Human Choice: " + humanChoice);
    return humanChoice;
}

function playRound (humanChoice, compChoice) {
    if (humanChoice == "rock") {
        if (compChoice == "rock") {
            console.log("Draw!");
        } else if (compChoice == "paper") {
            console.log("You Win! Paper beats Rock.");
            humanScore = humanScore + 1;
        } else if (compChoice == "scissors") {
            console.log("You Lose ... Rock Beats Scissors")
            compScore = compScore + 1;
        } 
    } else if (humanChoice == "paper") {
        if (compChoice == "rock") {
            console.log("You Win! Paper beats Rock.");
            humanScore = humanScore + 1;
        } else if (compChoice == "paper") {
            console.log("Draw!");
        } else if (compChoice == "scissors") {
            console.log("You Lose ... Scissors beat Paper")
            compScore = compScore + 1;
        }
    } else if (humanChoice == "scissors") {
        if (compChoice == "rock") {
            console.log("You Lose ... Rock beats Scissors.");
            compScore = compScore + 1;
        } else if (compChoice == "paper") {
            console.log("You Win! Scissors beat Paper.");
            humanScore = humanScore + 1;
        } else if (compChoice == "scissors") {
            console.log("Draw!")
        }
    } else {
        console.log("You gave non-sensical input, therefore you lose");
        compScore = compScore + 1;
    }
}   

function playGame () {
    for (let i = 0; i < 5; i++) {
        console.log("ROUND " + (i+1));
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
      }
    console.log("Your Score is " + humanScore);
    console.log("Computer Score is " + compScore);

    if (humanScore < compScore) {
        console.log("Sorry.... Computer is Superior");
    } else if (humanScore > compScore) {
        console.log ("Congratulations! You are the more superior being.");
    } else {
        console.log ("You are as good as the computer");
    }
}

playGame();