const options = ['rock','paper','scissors']
let humanScore = 0
let computerScore = 0
const buttonsParent = document.querySelector('.buttons-parent');
const buttons = buttonsParent.children;

buttons[0].addEventListener("click",() => playRound(buttons[0].textContent, getComputerChoice()));
buttons[1].addEventListener("click",() => playRound(buttons[1].textContent, getComputerChoice()));
buttons[2].addEventListener("click",() => playRound(buttons[2].textContent, getComputerChoice()));

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)]
}

function getHumanChoice() {
    let humanChoice = prompt('Enter your choice of "rock", "paper", or "scissors".')
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice
    }
    else {
        return 'Invalid choice'
    }
}

function playRound(humanChoice, computerChoice) {
    let result = 'lose'
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice) {
        result = null
    }
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        result = 'win'
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        result = 'win'
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        result = 'win'
    }
    if (result === 'win') {
        humanScore++
        console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}`)
    }
    else if (result === 'lose') {
        computerScore++
        console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}`)
    }
    else {
        console.log(`You both chose ${humanChoice}. It's a tie! Play again.`)
    }
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

// function playGame(numRounds) {
//     humanScore = 0
//     computerScore = 0
//     for (let i=0; i<numRounds; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         if (humanSelection === 'Invalid choice') {
//             console.log("Round cancelled; choice was invalid.")
//         }
//         else playRound(humanSelection, computerSelection)
//     }
//     console.log(`Final score: You ${humanScore} vs. Computer ${computerScore}`)
//     if (humanScore > computerScore) console.log("You win!")
//     else if (humanScore === computerScore) console.log("It's a tie!")
//     else console.log("You lose!")
// }