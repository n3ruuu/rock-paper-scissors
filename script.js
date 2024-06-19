let playerScore = 0, computerScore = 0;

const choices = [
    'rock',
    'paper',
    'scissors'
]

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) console.log("It's a Draw! You both picked" + humanChoice)
    else if (humanChoice === choices[0] && computerChoice === choices[2] ||
             humanChoice === choices[1] && computerChoice === choices[0] ||
             humanChoice === choices[2] && computerChoice === choices[1]
    ) {
        console.log('You Win! ' + humanChoice + " beats " + computerChoice);
        playerScore++;
    } else {
        console.log('You Lose! ' + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
}

for (let i = 0; i < 5; i ++) {
    playRound(getHumanChoice(), getComputerChoice());
}