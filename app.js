//This is the choice the 'computer' makes
const computerPlay = (function(){

     let gameOptions = ['rock', 'paper', 'scissors'];
     const gameChoice = Math.floor(Math.random() * gameOptions.length);
     
     return(gameChoice, gameOptions[gameChoice]);
})() 


//IIFE that holds objects of the game
let gameObj = (function(){

      //Selects the buttons rock, paper, scissors, or reset
      const selection = {
          rock: document.querySelector("#rock"),
          paper: document.querySelector("#paper"),
          scissors: document.querySelector("#scissors"),
          resetButton: document.querySelector('#reset')
      }

      //new div under results
      const results = document.querySelector("#results");

      //Text that announces if player/computer has won
      const winText = {
          playerWin: document.createElement('h2'),
          computerWin: document.createElement('h2')
      }
      
     //winner object
      const winner = {
          playerWinner: document.getElementById("winner"),
          computerWinner: document.getElementById("winner")
     }

     //Real time player score/computer score
      const score = {
          p1Score: document.querySelector('#player-score'),
          compScore: document.querySelector('#computer-score')
     }

      //new items
      let roundResult = document.createElement('h3');

     //Player, Computer, and winning score object
      const gameScore = {
          playerScore: 0,
          computerScore: 0,
          winningScore: 5,
          isGameOver = false
     }

      return {
          selection,
          results,
          winner,
          score,
          gameScore,
          roundResult,
          winText
      }
}) 

    



//Announces the winner of first to 5 round wins
const winner = (function(){
     const winnerAnnouncement = () => {
          if(gameObj.gameScore.computerScore == gameObj.gameScore.winningScore) {
                 computerWin.textContent = 'Computer has reached 5 points, computer wins!'
            }else if(playerScore == winningScore) {
                 playerWin.textContent = 'You have reached 5 points, you win!'
               }
            else{
                 console.log()
            }
               
            gameObj.winner.playerWinner.appendChild(playerWin);
            gameObj.winner.computerWinner.appendChild(computerWin);
        }

     return {winnerAnnouncement}
})()

//Functionality for 'rock' selection
let rock = (function(){
     
     gameObj.selection.rock.addEventListener('click', function() {
    
          const computerChoice = computerPlay();
          if(!gameObj.gameScore.isGameOver){
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
})()

//Functionality for 'paper' selection
let paper = (function() {
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
})()

//Functionality for 'scissors' selection
let scissors = (function(){
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
})()


resetButton.addEventListener('click', reset)





const reset = () => {
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