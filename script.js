function getComp() {
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

function getPlayer() {
    var playChoice = prompt("Rock, Paper, or Scissors");
    return (playChoice.toLowerCase());
}

function playRound() {
    if (playerSelec == compSelec)
        return ("tie");
    else if ((playerSelec == "rock" && compSelec == "scissors") || (playerSelec == "paper" && compSelec == "rock") || (playerSelec == "scissors" && compSelec == "paper"))
        return ("player");
    else if ((playerSelec == "rock" && compSelec == "paper") || (playerSelec == "paper" && compSelec == "scissors") || (playerSelec == "scissors" && compSelec == "rock"))
        return ("computer");
}

function game() {
    var playerwins = 0;
    var tie = 0;
    var computerwins = 0;

    for (let i = 0; i < 5; i++){
        playerSelec = getPlayer();
        compSelec = getComp();
        if (playRound() == "tie")
            tie++;
        else if (playRound() == "player")
            playerwins++;
        else if (playRound() == "computer")
            computerwins++;
    }
    
    console.log("Results:");
    console.log("Player wins: " + playerwins);
    console.log("Computer wins: " + computerwins);
    console.log("Tied games: " + tie);
}
game();
