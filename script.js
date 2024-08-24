console.log("Rock Paper Scissors");

let humanScore, computerScore = 0;

function getComputerChoice(){
    let element;
    let num = Math.random()
    if(num<(1/3)){
        element = "Rock";
    } else if(num>(1/3) && num<(2/3)){
        element = "Paper";
    } else{
        element = "Scissors";
    }
    return element.toUpperCase();
}

function getHumanChoice(){
    let h_choice = prompt("What element do you throw, human?: ");
    return h_choice.toUpperCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice==computerChoice){
        console.log("Both chose the same element, nobody gains a point!");
    } else if(humanChoice=="ROCK"){
        if(computerChoice=="PAPER"){
            console.log("You lose, Paper beats Rock!");
            computerScore++;
        } else{
            console.log("You win, Rock beats Scissor!");
            humanScore++;
        } 
    } else if(humanChoice=="PAPER"){
            if(computerChoice=="ROCK"){
                console.log("You win, Paper beats Rock!");
                humanScore++;
            } else{
                console.log("You lose, Scissors beat Paper!");
                computerScore++;
            }
    } else{
        if(computerChoice=="ROCK"){
            console.log("You lose, Rock beats Scissors!");
            computerScore++;
        } else{
            console.log("You win, Scissors beats Paper!!");
            humanScore++;
        }
    }
}

function playGame(){
    for(i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    if(humanScore==computerScore){
        console.log("It is a tie!!!");
    } else if(humanScore>computerScore){
        console.log("You won!!!");
    } else{
        console.log("You lost :((");
    }
}


playGame();
