function getComputerSelection() {
    var compNum = Math.floor(Math.random() * 3) + 1;
    switch (compNum) {
        case 1:
            return ("rock");
        case 2:
            return ("paper");
        case 3:
            return ("scissors");
    }
}

function getPlayerSelection() {
    var playChoice = prompt("Rock, Paper, or Scissors");
    return (playChoice.toLowerCase());
}

function playRound() {
    if (playerSelection == computerSelection)
        return ("tie");
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper"))
        return ("player");
    else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock"))
        return ("computer");
}

function game() {
    var playerWins = 0;
    var tie = 0;
    var computerWins = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerSelection();
        computerSelection = getComputerSelection();
        if (playRound() == "tie")
            tie++;
        else if (playRound() == "player")
            playerWins++;
        else if (playRound() == "computer")
            computerWins++;
    }
    
    console.log("Results:");
    console.log("Your wins: " + playerWins);
    console.log("Computer wins: " + computerWins);
    console.log("Tied games: " + tie);
    if (playerWins > computerWins)
        console.log("Damn you're like that huh")
    else if (playerWins < computerWins)
        console.log("Imagine losing to a bot....")
    else if (playerWins == computerWins)
        console.log("Atleast you didn't lose")
}
game();
