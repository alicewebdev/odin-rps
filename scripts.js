let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
const roundResults = document.getElementById("roundResults");
const score = document.getElementById("score");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  const moves = ["rock", "paper", "scissors"]
  const random = Math.floor(Math.random() * moves.length);
  return moves[random];
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
  
function playRound(humanChoice){
      const computerChoice = getComputerChoice();
      let result;

      if (humanChoice === computerChoice) {
          result = "Tie";
        } 
      else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')) {
          humanScore++;
          result = "Human";
        }
      else {
          computerScore++;
          result = "Computer";
        }
        roundResults.textContent = `${result}`;
        score.textContent = `${computerScore} : ${humanScore}`;

        if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
          roundResults.textContent += ` You won the game!`;
          } else {
            roundResults.textContent += ` Computer won the game!`;
          }
  }}