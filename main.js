
// Making Rock Paper Sicciors
var compCount = 0;
var playerCount = 0;
var playerSelection = 'rock';
var computerSelection = 'test';
var rock = document.getElementById('btn1');
var paper = document.getElementById('btn2');
var scissors = document.getElementById('btn3');
var playerLabel = document.getElementById('player');
var compLabel = document.getElementById('computer');
var winnerLabel = document.getElementById('winner');
var playerScore = document.getElementById('playerScore');
var compScore = document.getElementById('computerScore');
var finalWinner = document.getElementById('finalWinner');

rock.addEventListener('click', function(e){
    
    playerSelection = 'Rock';
    computerSelection = computerPlay();

    displayLabels()
    results(); 
   
    
 });

paper.addEventListener('click', function(e){
    playerSelection = 'Paper';
    computerSelection = computerPlay();

    displayLabels()
    results();   

 });

scissors.addEventListener('click', function(e){
    playerSelection = 'Scissors';
    computerSelection = computerPlay();

    
    displayLabels()
    results(); 
    
 });

 //computer picks
function computerPlay(){
    var arr = ["Rock","Paper", "Scissors"];
    var rand = arr[Math.floor(Math.random() * arr.length)];
    return rand;
}

//display Lables
function displayLabels(){
    playerLabel.innerHTML = ('You Picked: ' + playerSelection);
    compLabel.innerHTML = ('The Computer Picked: ' + computerSelection);
}


//results
function results(){

    if(playerSelection == computerSelection){
        winnerLabel.innerHTML = ("You tied, try again.");

    }

    else if((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')){
        winnerLabel.innerHTML = ("Congratulations, you WIN!")
        playerCount++;
        playerScore.innerHTML = ("Player Score: " + playerCount);
        score();
        
    }
    else{
        winnerLabel.innerHTML = ("You loose, try again.");
        compCount++;
        compScore.innerHTML = ("Computer Score: " + compCount);
        score();
        
    }
}

//Score Bored
function score(){

        if(playerCount > compCount && playerCount + compCount == 5){
            reset();
            finalWinner.innerHTML = ("Player Wins");
        }
        else if(playerCount < compCount && playerCount + compCount == 5){
            reset();
            finalWinner.innerHTML = ("Computer Wins");
        }
            
}
function reset(){
    
        playerCount = 0;
        compCount = 0;
        playerScore.innerHTML = ("Player Score: " + playerCount);
        compScore.innerHTML = ("Computer Score: " + playerCount);
        finalWinner.innerHTML = ("");

        }
