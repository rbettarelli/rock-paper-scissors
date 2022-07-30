const choices = ["rock", "paper", "scissor"];
let compScore = 0;
let userScore = 0;
let again = false;


function game() {

    for (i = 0; i < 5; i++) {


        playRound(i);

    }

    document.querySelector("button").textContent = "Play new game";
    win();

}

function win() {

    if (compScore > userScore) {
        alert('Computer Win');
        console.log('Computer Win')
    } else if (compScore == userScore) {
        alert('TIE');
        console.log('TIE')
    } else {
        console.log("You WIN")
    }
}

function getPlayerSelection() {

    let input = prompt("Type Rock, Paper, or Scissors");
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt('Check False');
        input = input.toLowerCase();
        check = validateInput(input);
    }

    console.log('Player Choice: ', input);
    return input;
}
function validateInput(choice) {

    return choices.includes(choice)


}
function getComputerChoice() {

    let comp = choices[Math.floor(Math.random() * choices.length)];
    console.log('Computer Choice: ', comp);
    return comp;

}

function checkWinner(user, comp) {
    if (comp === user) {
        return 'Tie';
    }
    else if (
        (comp === 'rock' && user === 'scissor') ||
        (comp === 'paper' && user === 'rock') ||
        (comp === 'scissor' && user === 'paper')) {
        compScore++;
        return "Computer";
    }
    else {
        userScore++;
        return 'Player';
    }

}


function playRound(round) {

    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    console.log(round + 1);
    
}
