let computerMove = ''; /* computerMove will be used in other parts so I let it stay global. I have empty strings that will be filled in with the computers move depending on the random number it generates */

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

console.log(getComputerChoice());

