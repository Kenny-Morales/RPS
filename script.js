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
        return ("it's a tie");
    else if ((playerSelec == "rock" && compSelec == "scissors") || (playerSelec == "paper" && compSelec == "rock") || (playerSelec == "scissors" && compSelec == "paper"))
        return ("player wins");
    else if ((playerSelec == "rock" && compSelec == "paper") || (playerSelec == "paper" && compSelec == "scissors") || (playerSelec == "scissors" && compSelec == "rock"))
        return ("computer wins");
    else 
        return ("you broke something lmao")
}

function game() {
    for (let i = 0; i < 5; i++){
        playerSelec = getPlayer();
        compSelec = getComp();
        console.log(playRound());
    }
}
game();
