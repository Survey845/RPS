console.log("Rock Paper Scissors");

let humanScore = 0;
let computerScore = 0;



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

}

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    let resultString;
    if(humanChoice==computerChoice){
        resultString = "Both chose the same element, nobody gains a point!";
    } else if(humanChoice=="ROCK"){
        if(computerChoice=="PAPER"){
            resultString = "You lose, Paper beats Rock!";
            computerScore++;
        } else{
            resultString = "You win, Rock beats Scissor!";
            humanScore++;
        } 
    } else if(humanChoice=="PAPER"){
            if(computerChoice=="ROCK"){
                resultString = "You win, Paper beats Rock!";
                humanScore++;
            } else{
                resultString = "You lose, Scissors beat Paper!";
                computerScore++;
            }
    } else{
        if(computerChoice=="ROCK"){
            resultString = "You lose, Rock beats Scissors!";
            computerScore++;
        } else{
            resultString = "You win, Scissors beats Paper!!";
            humanScore++;
        }
    }
    if(computerScore<5 && humanScore<5){
    resultString += "<br/> Your Score: " + humanScore + "/ Computer Score: "+ computerScore;
    } else if(computerScore==5){
        resultString += "<br/> You Lose :((, Computer has 5 points";
        computerScore = 0;
        humanScore = 0;
    } else{
        resultString += "<br/> You Win!!!, You have 5 points! :)";
        computerScore = 0;
        humanScore = 0;
    }
    
    return resultString;
    
}

/*function playGame(){
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    
    if(humanScore==computerScore){
        console.log("It is a tie!!!");
    } else if(humanScore>computerScore){
        console.log("You won!!!");
    } else{
        console.log("You lost :((");
    }
}*/


let rockButton = document.createElement("button");
let paperButton = document.createElement("button");
let scissorButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorButton.textContent = "Scissors";

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorButton);

let resultDiv = document.createElement("div");


rockButton.addEventListener("click", () => {
    resultDiv.innerHTML = playRound("ROCK");
})

paperButton.addEventListener("click",() => {
    resultDiv.innerHTML = playRound("PAPER");
})

scissorButton.addEventListener("click",() => {
    resultDiv.innerHTML = playRound("SCISSORS");
})

document.body.appendChild(resultDiv);


