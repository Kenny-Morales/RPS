const playerSelec = getPlayer();
const compSelec = getComp();

function getComp() {
    var compNum = Math.floor(Math.random() * 3) + 1;
    console.log(compNum);
    switch (compNum) {
        case 1:
            return ("rock");
        case 2:
            return ("paper");
        case 3:
            return ("scissors");
        default:
            return ("you broke it");
    }
}

function getPlayer() {
    var playChoice = prompt("Rock, Paper, or Scissors");
    return (playChoice.toLowerCase());
}

function playRound(playerSelec, compSelec) {
    if (playerSelec == compSelec) 
        console.log("it's a tie");
    else if ((playerSelec == "rock" && compSelec == "scissors") || (playerSelec == "paper" && compSelec == "rock") || (playerSelec == "scissors" && compSelec == "paper"))
        console.log("player wins")
    else 
        console.log("computer wins")
}
console.log(playRound(playerSelec, compSelec));