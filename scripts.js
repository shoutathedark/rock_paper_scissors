function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    /* var choice = choices[Math.floor(Math.random()*choices.length)];
    console.log(choice); */
    return choices[Math.floor(Math.random()*choices.length)];
}

function playgame(playerSelection,computerSelection) {

    console.log("Player Selection:"+playerSelection);
    console.log("Computer Selection:"+computerSelection);
    
    /*const playerchoice = playerSelection.toLowerCase();*/

    return getresult(playerSelection, computerSelection);
}

function getresult(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        console.log("Tie!");
        return "Tie!"
    }
    
    else if(playerSelection == "rock"){
        if(computerSelection == "scissors"){
            console.log("You win! Rock beats scissors!")
            return "You win! Rock beats scissors!"
        }
        else{
            console.log("You lose! Paper beats rock!");
            return "You lose! Paper beats rock!"
        }
        
    }
    
    else if (playerSelection == "paper"){
        if(computerSelection == "scissors"){
            console.log("You lose! Scissors beats paper!");
            return "You lose! Scissors beats paper!"
        }
        else{
            console.log("You win! Paper beats rock!");
            return "You win! Paper beats rock!"
        }
    }
    
    else if (playerSelection == "scissors"){
        if(computerSelection == "rock"){
            console.log("You lose! Rock beats scissors!");
            return "You lose! Rock beats scissors!"
        }
        else{
            console.log("You win! Scissors beats paper!");
            return "You win! Scissors beats paper!"
        }
    }

    else return "Error"
}

function playRound(){
    let playerwins = 0;
    let computerwins = 0;

    for(let i = 0; i<5; i++){
        var result = playgame(getComputerChoice(), getComputerChoice());

        if(result.includes("Tie!")){
            
        }
        
        else if(result.includes("win")){
            playerwins++;
        }
        else {computerwins++;}
    }
    console.log(computerwins);
    console.log(playerwins);

    if (playerwins>computerwins){
        return "Player is the winner!"
    }

    else return "Computer is the winner!"
}