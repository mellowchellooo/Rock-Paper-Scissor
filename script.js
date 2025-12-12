let computerMove = ''; /* computerMove will be used in other parts so I let it stay global. I have empty strings that will be filled in with the computers move depending on the random number it generates */

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);/*I want randomNum to be between 0 and 2 for my three different choices. I use math.random to generate float between 0-1 multiply by three to get a number between 0-3. then math.floor rounds DOWN so my only numbers are 0, 1, 2. and no decimal numbers */
    
    if (randomNum === 0){
        computerMove = 'rock';
    } else if(randomNum === 1){
        computerMove = 'paper';
    } else if(randomNum === 2){
        computerMove = 'scissor';
    }
   return computerMove;

    /*
     depending what random number generates, 
    it will be assigned a certain string value,
    and then return answer when getComputerChoice() is called
    */
}
function  getHumanChoice() {
  let humanChoice = prompt('rock, paper, or scissor?'); /* a prompt will pop up with the words rock,paper,scissor inside of it. whatever you write in the prompt box will be stored as a string in the "humanChoice variable"*/
  humanChoice = humanChoice.toLowerCase();/* we are making sure that the value stored in humanChoice, will always be lowercase, because everything is case sensitive. by putting .toLowerCase, on the variable, it makes it so all letters in the string are lowercase.*/

  if (
    humanChoice === 'rock' ||
    humanChoice === 'paper' ||
    humanChoice === 'scissor'
  ) {
    console.log(humanChoice);
    return humanChoice;
  } else {
    console.log ('choose wisely, reload page and try again');
  }
}
/*the if..else statement makes it so if your input in prompt is strictly equal to 'rock'
'paper' or(||) 'scissor' it console.logs the human choice
and returns it as well.
but if you write anything other than rock, paper, or scissor,
it will console.log the string 'choose wisely...etc.*/


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log('It"s a tie!');
    } else if (humanChoice === 'rock' && computerChoice === 'scissor'){
        console.log('You Win!');
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('You Win!');
    } else if(humanChoice === 'scissor' && computerChoice === 'paper'){
        console.log('You Win!');
    } else {
        console.log('LAHOOOO..SAAAHERRRR');
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);