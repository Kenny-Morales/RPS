let playerWins = 0;
let computerWins = 0;
let ties = 0;

const playerResults = document.querySelector("#player");
const computerResults = document.querySelector("#computer");
const tiedResults = document.querySelector("#ties");

function getPlayerSelection(selection) {
    playerSelection = selection;
    playRound();
    score();
}

function getComputerSelection() {
    var computerNumber = Math.floor(Math.random() * 3) + 1;
    switch (computerNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound() {
    var computerSelection = getComputerSelection();
    if (playerSelection === computerSelection) 
        return 1;
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    )
        return 2;
    else
        return 3;
}

function score() {
    switch (playRound()) {
        case 1:
            console.log("Tie");
            ties += 1;
            tiedResults.textContent = ties;
            break;
        case 2:
            console.log("Player wins");
            playerWins += 1;
            playerResults.textContent = playerWins;
            break;
        case 3:
            console.log("Computer wins");
            computerWins += 1;
            computerResults.textContent = computerWins;
            break;
    }
}

document.getElementById("rock").addEventListener("click", () => {
    getPlayerSelection("rock");
});
document.getElementById("paper").addEventListener("click", () => {
    getPlayerSelection("paper");
});
document.getElementById("scissors").addEventListener("click", () => {
    getPlayerSelection("scissors");
});