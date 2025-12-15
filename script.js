/* this is to get computer choice*/

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);/*math.floor is used to get a whole number from math.random * 3 and compare r,p,s to 0,1,2*/

  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else {
    return 'scissor';
  }
}
/*this will get the human choice from the input and return the input*/
function getHumanChoice() {
  let humanChoice = prompt('rock, paper, or scissor?');

  if (!humanChoice) {
    console.log('No input');
    return null;
  }

  humanChoice = humanChoice.toLowerCase();

  if (
    humanChoice === 'rock' ||
    humanChoice === 'paper' ||
    humanChoice === 'scissor'
  ) {
    return humanChoice;
  } else {
    console.log('choose wisely, reload page and try again');
    return null;
  }
}


/*this gets the human choice and computer choice and compares them to see who won the round*/
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return 'tie';
  }

  if (
    (humanChoice === 'rock' && computerChoice === 'scissor') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissor' && computerChoice === 'paper')
  ) {
    console.log('You Win!');
    return 'winner';
  } else {
    console.log('LAHOOOO.. SAAAHERRRR');
    return 'loser';
  }
}

/*this plays the game for 5 rounds and makes a score*/
function playGame(round, humanScore, computerScore) {
  if (round > 5) {
    console.log('--- GAME OVER ---');
    console.log('Human:', humanScore);
    console.log('Computer:', computerScore);
    return;
  }

  console.log(`--- Round ${round} ---`);

  let humanSelection = getHumanChoice();
  if (humanSelection === null) return;

  let computerSelection = getComputerChoice();
  console.log('Computer chose:', computerSelection);

  let result = playRound(humanSelection, computerSelection);

  if (result === 'winner') {
    humanScore = humanScore + 1;
  } else if (result === 'loser') {
    computerScore = computerScore + 1;
  }

  playGame(round + 1, humanScore, computerScore);
}


playGame(1, 0, 0);