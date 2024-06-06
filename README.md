# Project-Rock-Paper-Scissors
This is a JavaScript implementation of a classic rock-paper-scissors game that simulates a competition between a human player and the computer over five rounds.

How to Play
Run the game using Node.js or a similar JavaScript runtime environment.
The game will prompt you to enter your choice ("rock", "paper", or "scissors") for each round.
The computer will also make a random choice.
The winner of each round and the updated score will be displayed.
After five rounds, the overall winner (human or computer) and the final score board will be shown.
Code Structure
The code is organized into several functions:

getComputerChoice(): Generates a random choice for the computer.
getHumanChoice(userChoice): Takes user input, converts it to lowercase for case-insensitive matching, and validates it.
playRound(computerChoice, humanChoice): Simulates a single round, determines the winner, and updates scores.
playGame(): Runs the entire game loop for five rounds, handling user interaction and round logic.
Note: Currently, the game uses console output for messages and scores.