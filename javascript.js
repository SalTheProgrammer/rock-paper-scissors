// the heart of rock-paper-scissors game

//console.log("Let the game begins!")

let humanScore = 0;
let compScore = 0;
let humanChoice = "rock"; //default human choice is rock
let compChoice = "rock"; //default computer choice is rock

const images = Array.from(document.querySelectorAll('.images'));
var gameScore = document.getElementById('gameScore');
var announcement = document.getElementById('announcement');
var compImage = document.getElementById('compImage');

function getComputerChoice() {
    let compChoice = "rock"; //default choice for computer

    compNumChoice = Math.floor(Math.random() * 3); // randomly return 0, 1, or 2

    if (compNumChoice == 0) {
        compChoice = "rock";
        compImage.src = "./images/rock-sketch.png";
    } else if (compNumChoice == 1) {
        compChoice = "paper";
        compImage.src = "./images/paper-sketch.png";
    } else {
        compChoice = "scissors";
        compImage.src = "./images/scissors-sketch.png";
    }
    //console.log("Computer choice: " + compChoice);
    compImage.width = "100";
    //compImage.height = "100";
    return compChoice;
}

function getHumanChoice () {
    //console.log("Human Choice: " + humanChoice);
    return humanChoice;
}

function setHumanChoice (choice) {
    humanChoice = choice;
}

function playRound (humanChoice, compChoice) {
    let result = "";

    if (humanChoice == "rock") {
        if (compChoice == "rock") {
            //console.log("Draw!");
            result = "Draw";
        } else if (compChoice == "paper") {
            //console.log("You Win! Paper beats Rock.");
            result = "You Win! Paper beats Rock."
            humanScore = humanScore + 1;
        } else if (compChoice == "scissors") {
            //console.log("You Lose ... Rock Beats Scissors")
            result = "You Lose ... Rock Beats Scissors";
            compScore = compScore + 1;
        } 
    } else if (humanChoice == "paper") {
        if (compChoice == "rock") {
            //console.log("You Win! Paper beats Rock.");
            result = "You Win! Paper beats Rock.";
            humanScore = humanScore + 1;
        } else if (compChoice == "paper") {
            //console.log("Draw!");
            result = "Draw";
        } else if (compChoice == "scissors") {
            //console.log("You Lose ... Scissors beat Paper")
            result = "You Lose ... Scissors beat Paper";
            compScore = compScore + 1;
        }
    } else if (humanChoice == "scissors") {
        if (compChoice == "rock") {
            //console.log("You Lose ... Rock beats Scissors.");
            result = "You Lose ... Rock beats Scissors.";
            compScore = compScore + 1;
        } else if (compChoice == "paper") {
            //console.log("You Win! Scissors beat Paper.");
            result = "You Win! Scissors beat Paper.";
            humanScore = humanScore + 1;
        } else if (compChoice == "scissors") {
            result = "Draw!";
            //console.log("Draw!")
        }
    } else {
        console.log("You gave non-sensical input, therefore you lose");
        compScore = compScore + 1;
    }

    announcement.innerHTML = result;
    gameScore.innerHTML = "Human " + humanScore + " - " + compScore + " Computer";
}   


images.forEach((image) => {
    // and for each one we add a 'click' listener
    image.addEventListener("click", () => {
        //alert(image.getAttribute("data-image"));
        if (humanScore >= 5 || compScore >= 5) {
            return;
        }
        setHumanChoice(image.getAttribute("data-image"));
        playRound(getHumanChoice(), getComputerChoice());
    });
});