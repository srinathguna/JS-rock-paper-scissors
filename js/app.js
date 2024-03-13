const yourDisplay = document.getElementById("your-choice");
const computerDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result-choice");
const buttons = document.querySelectorAll("button")
const userScoreDisplay = document.getElementById("userScore")
const computerScoreDisplay = document.getElementById("computerScore")
const yourImg = document.getElementById("your-choice-img")
const computerImg = document.getElementById("computer-choice-img")

let userChoice 
let computerChoice
let result
let userScore = 0;
let computerScore = 0;
let iconimg;

yourDisplay.innerHTML = "Hand shaking";
computerDisplay.innerHTML = "Hand shaking";
resultDisplay.innerHTML = "Result Loading";
let computerr = document.getElementById("computer")
const remove = () => {
    computerr.classList.remove("anim");
}
buttons.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    setTimeout(() => {
        userChoice = e.target.value
        yourDisplay.innerHTML = userChoice;
    },2000)
    setTimeout(() => {
        computer_value()
        result_value()
        remove()
    }, 2000)
    setTimeout(() => {        
        userScores()
        computerScores()
    },2000)
    // computer_value()
    // result_value()
}))

const computer_value = () => {
    let randomChoice = Math.floor(Math.random() * 3)+ 1
    console.log(randomChoice)
    if (randomChoice === 1) {
        computerChoice = "Rock";
        iconimg = "./images/shake.svg";
    }
    if (randomChoice === 2) {
        computerChoice = "Paper";
        iconimg = "./images/paper-svg.svg";
    }
    if (randomChoice === 3) {
        computerChoice = "Scissor";
       iconimg = "./images/scissors-svg.svg";
    }
    computerDisplay.innerHTML = computerChoice;
    computerImg.src = iconimg;
    
}

const result_value = () => {
    if (userChoice === computerChoice) {
        result = "draw";
    }
    if (userChoice === "Rock" && computerChoice === "Paper") {
        result = "Computer win";
    }
    if (userChoice === "Paper" && computerChoice === "Rock") {
        result = "You win";
    }
    if (userChoice === "paper" && computerChoice === "Scissor") {
        result = "Computer win";
    }
    if (userChoice === "Scissor" && computerChoice === "Paper") {
        result = "You win";
    }
    if (userChoice === "Rock" && computerChoice === "Scissor") {
        result = "You win";
    }
    if (userChoice === "Scissor" && computerChoice === "Rock") {
        result = "Computer win";
    }
    resultDisplay.innerHTML = result;
}

let userScores = () => {
    if (result === "You win") {
        userScore = userScore + 1
    }
    userScoreDisplay.innerHTML = userScore
}

let computerScores = () => {
    if (result === "Computer win") {
        computerScore = computerScore + 1
    }
    computerScoreDisplay.innerHTML = computerScore
}

// if (userScore == 10) {
//     console.log("You won the match")
// }
// if (computerScore == 10) {
//     console.log("Computer won the match")
// }