function getComputerChoice(){
    const moves = ["Rock", "Paper", "Scissors"]
    const random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function getHumanChoice(){
    const humanChoice = String(window.prompt("Rock, paper or scissors?", ""));
    let humanResult = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    
    if (humanResult === "Rock" || humanResult === "Paper" || humanResult === "Scissors")
        {return humanResult;} 
    else
        {alert("Please enter rock, paper or scissors.");
        getHumanChoice();}
}

let humanScore = 0;
let computerScore = 0;

function humanWins(human, computer) {
    return (
      (human === "Rock" && computer === "Scissors") ||
      (human === "Scissors" && computer === "Paper") ||
      (human === "Paper" && computer === "Rock")
    );
  }

function playRound(humanResult, computerChoice){
    if (humanResult === computerChoice) {
        console.log(`You tied! Both chose ${humanResult}`);
      } 
    else if (humanWins(humanResult, computerChoice)) {
        humanScore++;
        console.log(`You win! ${humanResult} beats ${computerChoice}`);
      }
    else {
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanResult}`);
      }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);