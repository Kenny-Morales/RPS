function compSelec() {
    var compNum = Math.floor(Math.random() * 3) + 1;
    console.log(compNum);
    switch (compNum) {
        case 1:
            console.log("rock");
            break;
        case 2:
            console.log("paper");
            break;
        case 3:
            console.log("scissors");
            break;
        default:
            return ("you broke it");
    }
}

function playerSelec() {
    var playChoice = prompt("Rock, Paper, or Scissors");
    console.log(playChoice.toLowerCase());
}