function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  function getHumanChoice() {
    let humanChoice = prompt('Please choose rock, paper, or scissors.');
    return humanChoice.toLowerCase();
  }
  
  humanScore = 0;
  computerScore = 0;
  
  function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
      console.log('It\'s a tie! Score: ' + computerScore + ' - ' + humanScore);
    } 
    else if (humanSelection === 'rock') {
      if (computerSelection === 'paper') {
        computerScore++;
        console.log('Computer wins! Score: ' + computerScore + ' - ' + humanScore);
      } 
      else {
        humanScore++;
        console.log('Human wins! Score: ' + computerScore + ' - ' + humanScore);
      }
    }
    else if (humanSelection === 'paper') {
      if (computerSelection === 'scissors') {
        computerScore++;
        console.log('Computer wins! Score: ' + computerScore + ' - ' + humanScore);
      } 
      else {
        humanScore++;
        console.log('Human wins! Score: ' + computerScore + ' - ' + humanScore);
      }
    }
    else if (humanSelection === 'scissors') {
      if (computerSelection === 'rock') {
        computerScore++;
        console.log('Computer wins! Score: ' + computerScore + ' - ' + humanScore);
      } 
      else {
        humanScore++;
        console.log('Human wins! Score: ' + computerScore + ' - ' + humanScore);
      }
    }
  }
  
  function playGame() {
    for (let i = 0; i < 5; i++) {
      let humanSelection = getHumanChoice();
      let computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    }
    if (computerScore > humanScore) {
      console.log('Computer wins the game!');
    } 
    else if (computerScore < humanScore) {
      console.log('Human wins the game!');
    } 
    else {
      console.log('It\'s a tie game!');
    }
  }
  
  playGame();