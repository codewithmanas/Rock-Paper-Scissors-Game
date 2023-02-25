const ChoiceBtn = document.querySelectorAll("button");
const PlayerChoice = document.getElementById("player");
const ComputerChoice = document.getElementById("computer");
const Result = document.getElementById("result");


let player;
let computer;

ChoiceBtn.forEach(button => button.addEventListener("click", event => {
    PlayerTurn(event.target.id);
}))

function PlayerTurn(choice){
    player = choice;
    ComputerTurn();
    PlayerChoice.textContent = `Player Choice ${player}`;
    ComputerChoice.textContent = `Computer Choice ${computer}`;
    Result.textContent =  CheckWinner();
}

function ComputerTurn(){
    const Random = Math.floor(Math.random() * 3) + 1; 

    switch(Random) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
        default:
    }
}

function CheckWinner(){
    if(computer == "Rock"){
        if(player == "Rock") return "Draw";
        if(player == "Scissors") return "Lose";
        if(player == "Paper") return "Win";
    }
    if(computer == "Paper"){
        if(player == "Paper") return "Draw";
        if(player == "Scissors") return "Win";
        if(player == "Rock") return "Lose";
    }
    if(computer == "Scissors"){
        if(player == "Scissors") return "Draw";
        if(player == "Rock") return "Win";
        if(player == "Paper") return "Lose";
    }
    return;
    
}