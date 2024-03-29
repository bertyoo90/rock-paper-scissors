//This is the choice the 'computer' makes
function computerPlay() {
    let gameOptions = ['rock', 'paper', 'scissors'];
    const gameChoice = Math.floor(Math.random() * gameOptions.length);
    
    return(gameChoice, gameOptions[gameChoice]);

}


//Selects the buttons rock, paper, scissors, or reset
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const resetButton = document.querySelector('#reset')

//new div under results
const results = document.querySelector("#results");

//game winner 
const playerWinner = document.getElementById("winner");
const computerWinner = document.getElementById("winner");

//game winner announcement
const playerWin = document.createElement('h2')
const computerWin = document.createElement('h2')

//Real time player score/computer score
const p1Score = document.querySelector('#player-score')
const compScore = document.querySelector('#computer-score')

//new items
let roundResult = document.createElement('h3');

//Player + computer score for count purposes
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;

//Winning score
const winningScore = 5;


rock.addEventListener('click', function() {
    
    const computerChoice = computerPlay();
    if(!isGameOver){
      if(computerChoice === 'paper') {
         roundResult.textContent = `You have chosen rock and the computer has chosen paper. Computer wins!` ;
         computerScore += 1;
         compScore.innerText = computerScore;
       }else if(computerChoice === 'rock') {
         roundResult.textContent = 'You have chosen rock and the computer has chosen rock. Its a draw, try again';
       }else if(computerChoice === 'scissors'){
         roundResult.textContent = 'You have chosen rock and the computer has chosen scissors. You win!';
         playerScore += 1;
         p1Score.innerText = playerScore;
       }if(playerScore === winningScore || computerScore === winningScore){
            isGameOver = true;
       }
  }

    winnerAnnouncement();
    results.append(roundResult);
    return 'rock';  

    
})

paper.addEventListener('click', function() {

  const computerChoice = computerPlay();
  if(!isGameOver){
    if(computerChoice === 'paper') {
         roundResult.textContent = 'You have chosen paper and the computer has chosen paper. Its a draw, try again.';
    }else if(computerChoice === 'rock') {
         roundResult.textContent = 'You have chosen paper and the computer has chosen rock. You win!.';
         playerScore += 1;
         p1Score.innerText = playerScore;
    }else if(computerChoice === 'scissors'){
         roundResult.textContent = 'You have chosen paper and the computer has chosen scissors. Computer wins!';
         computerScore += 1;
         compScore.innerText = computerScore;
    }if(playerScore === winningScore || computerScore === winningScore){
         isGameOver = true;
    }
  }
    
    winnerAnnouncement();
    results.append(roundResult);
    return 'paper';

    
  
})


scissors.addEventListener('click', function()  {

    const computerChoice = computerPlay();
  if(!isGameOver){
    if(computerChoice === 'paper') {
         roundResult.textContent = 'You have chosen scissors and the computer has chosen paper. You win!';
         playerScore += 1;
         p1Score.innerText = playerScore;
    }else if(computerChoice === 'rock') {
         roundResult.textContent = 'You have chosen scissors and the computer has chosen rock. Computer wins!.';
         computerScore += 1;
         compScore.innerText = computerScore;
    }else if(computerChoice === 'scissors'){
         roundResult.textContent = 'You have chosen scissors and the computer has chosen scissors. Its a draw, try again.'
    }if(playerScore === winningScore || computerScore === winningScore){
         isGameOver = true;
    }
  }
    winnerAnnouncement();
    results.append(roundResult);
    return 'scissors'

  

       
})

resetButton.addEventListener('click', reset)

function winnerAnnouncement() {
  if(computerScore == winningScore) {
         computerWin.textContent = 'Computer has reached 5 points, computer wins!'
    }else if(playerScore == winningScore) {
         playerWin.textContent = 'You have reached 5 points, you win!'
       }
    else{
         console.log()
    }
       
    playerWinner.appendChild(playerWin);
    computerWinner.appendChild(computerWin);
}


function reset() {
     isGameOver = false;
     p1Score.textContent = 0;
     compScore.textContent = 0;
     playerScore = 0;
     computerScore = 0;
     roundResult.textContent = '';
     playerWin.textContent = '';
     computerWin.textContent = '';
     results.textContent = '';
}
