
// Making Rock Paper Sicciors

var playerSelection = 'rock';
var computerSelection = 'test';
var rock = document.getElementById('btn1');
var paper = document.getElementById('btn2');
var scissors = document.getElementById('btn3');
var playerLabel = document.getElementById('player');
var compLabel = document.getElementById('computer');
var winnerLabel = document.getElementById('winner');

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
        winnerLabel.innerHTML = ("You tried, try again.");
    }

    else if((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')){
        winnerLabel.innerHTML = ("Congratulations, you win!")
    }
    else{
        winnerLabel.innerHTML = ("You Loose, try again.");
    }
}