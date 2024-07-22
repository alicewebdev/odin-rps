function getComputerChoice(){
    const moves = ["Rock", "Paper", "Scissors"]
    const random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function getHumanChoice(){
    const humanChoice = String(window.prompt("Rock, paper or scissors?", ""));
    let humanResult = humanChoice.toLowerCase();
    
    if (humanResult === "rock" || humanResult === "paper" || humanResult === "scissors")
        {return humanResult;} 
    else
        {alert("Please enter rock, paper or scissors.");
        getHumanChoice();}
}

let humanScore = 0;
let computerScore = 0;