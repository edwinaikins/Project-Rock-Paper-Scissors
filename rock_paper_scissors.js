
/**
 * Simulates a rock-paper-scissors game between a human player and a computer.
 * The game consists of 5 rounds, and the winner is determined based on the scores.
 * @returns The result of the game and the final score.
 */
let Choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    /**
     * Generates a random number between 0 and 2 (inclusive) to represent the computer's choice in a game.
     * @returns A random number between 0 and 2.
     */
    let ComputerChoice = Math.floor(Math.random() * 3);
    return Choice[ComputerChoice];
}

/**
 * Returns the user's choice in lowercase if it is a valid choice (rock, paper, or scissors).
 * @param {string} userChoice - The user's choice of rock, paper, or scissors.
 * @returns {string} The user's choice in lowercase if valid, otherwise a message to enter a valid choice.
 */
// function getHumanChoice(userChoice){
//     userChoice = userChoice.toLowerCase();
//     if(Choice.includes(userChoice)){
//         return userChoice;
//     }
//     return "Enter rock,paper or scissors"

// }

/**
 * Simulates a round of rock-paper-scissors game between a human and a computer.
 * @param {string} computerChoice - The computer's choice (rock, paper, or scissors).
 * @param {string} humanChoice - The human's choice (rock, paper, or scissors).
 * @returns {string} The result of the round and the updated scores.
 */
function playRound(computerChoice, humanChoice){
    if(humanChoice == computerChoice){
        return "ITS A TIE"
    }
    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        return "You Win! Rock beats Scissors";
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        return "You Win! Scissors beats Paper";
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        return "You Win! Paper beats Rock";
    }
    else 
        computerScore++;
        console.log(computerScore);
        return `You Lose! ${computerChoice} beats ${humanChoice}`;
}

document.querySelector("#rock").addEventListener("click", playerSelection);
document.querySelector("#paper").addEventListener("click", playerSelection);
document.querySelector("#scissors").addEventListener("click", playerSelection);

function playerSelection(event){
        let computerChoice = getComputerChoice();
        let humanChoice = event.target.id;

        let result = document.querySelector("#results");
        result.textContent = playRound(computerChoice, humanChoice);
        let winner = document.querySelector("#winner");
        if(humanScore >= 5 || computerScore >= 5){
            if(computerScore = 5){
                winner.textContent = `Computer Won: Score board- Human : ${humanScore}pts --- Computer : ${computerScore}pts`;
                humanScore = 0;
                computerScore = 0;
                winner.textContent = "";
            }
            else
                winner.textContent = `You Won: Score board- Human : ${humanScore}pts --- Computer : ${computerScore}pts`;
                humanScore = 0;
                computerScore = 0;
                winner.textContent = "";
        }

}
/**
 * Simulates a game of rock, paper, scissors for 5 rounds between a human player and the computer.
 * @returns {string} The result of the game and the final score board.
 */
// function playGame(){
   
//     if(humanScore == computerScore){
//         return `Its a Tie: Score board- Human : ${humanScore}pts --- Computer : ${computerScore}pts`;
//     }
//     else if (humanScore > computerScore){
//         return `You Won: Score board- Human : ${humanScore}pts --- Computer : ${computerScore}pts`;
//     }
//     else 
//         return `Computer Won: Score board- Human : ${humanScore}pts --- Computer : ${computerScore}pts`;
    
// }
