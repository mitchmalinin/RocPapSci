
// Making Rock Paper Sicciors

const playerSelection = 'rock';
const computerSelection = computerPlay();

function computerPlay(){
    var arr = ["rock","paper", "scissors"];
    var rand = arr[Math.floor(Math.random() * arr.length)];
    return rand;
}

console.log(computerSelection);



function playRound(playerInput, ComputerSelection){


}

