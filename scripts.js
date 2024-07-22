function getComputerChoice(){
    const moves = ["Rock", "Paper", "Scissors"]
    const random = Math.floor(Math.random() * moves.length);
    return moves[random];
}