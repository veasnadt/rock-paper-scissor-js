document.addEventListener('DOMContentLoaded', (e) => {
  getHumanChoice();
});

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
  const rockBtn = document.getElementById('rock-btn');
  const paperBtn = document.getElementById('paper-btn');
  const scissorsBtn = document.getElementById('scissors-btn');
  rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
  });
  paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
  });
  scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
  });
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    displayResult('It\'s a tie! Score: ' + computerScore + ' - ' + humanScore);
  } 
  else if (humanSelection === 'rock') {
    if (computerSelection === 'paper') {
      computerScore++;
      displayResult('Computer wins! Score: ' + computerScore + ' - ' + humanScore);
    } 
    else {
      humanScore++;
      displayResult('Human wins! Score: ' + computerScore + ' - ' + humanScore);
    }
  }
  else if (humanSelection === 'paper') {
    if (computerSelection === 'scissors') {
      computerScore++;
      displayResult('Computer wins! Score: ' + computerScore + ' - ' + humanScore);
    } 
    else {
      humanScore++;
      displayResult('Human wins! Score: ' + computerScore + ' - ' + humanScore);
    }
  }
  else if (humanSelection === 'scissors') {
    if (computerSelection === 'rock') {
      computerScore++;
      displayResult('Computer wins! Score: ' + computerScore + ' - ' + humanScore);
    } 
    else {
      humanScore++;
      displayResult('Human wins! Score: ' + computerScore + ' - ' + humanScore);
    }
  }
}

function displayResult(result) {
  const resultDiv = document.getElementById('result');
  const resultP = document.createElement('p');
  resultP.textContent = result;
  resultDiv.appendChild(resultP);

  if (computerScore === 5) {
    const resultP = document.createElement('p');
    resultP.textContent = 'Computer wins the game!';
    resultDiv.appendChild(resultP);
    computerScore = 0;
    humanScore = 0;
  }
  else if (humanScore === 5) {
    const resultP = document.createElement('p');
    resultP.textContent = 'Human wins the game!';
    resultDiv.appendChild(resultP);
    computerScore = 0;
    humanScore = 0;
  }
}