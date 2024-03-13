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
let userIconimg;
let computerIconimg;

// yourDisplay.innerHTML = "Hand shaking";
// computerDisplay.innerHTML = "Hand shaking";
// resultDisplay.innerHTML = "Result Loading";
let computer = document.getElementById("computer")
let you = document.getElementById("you")
const Add = () => {
    you.classList.add("hand");
    computer.classList.add("hand");
    setTimeout(() => {        
        you.classList.add("anim");
        computer.classList.add("anim");
    }, 1000)
    
}
const Remove = () => {
    setTimeout(() => {
        you.classList.remove("anim");
        computer.classList.remove("anim");
    },3000)
}

buttons.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    Add()
    Remove()
    setTimeout(() => {
        userChoice = e.target.value
        yourDisplay.innerHTML = userChoice;
        if (userChoice === "Rock") {
            userIconimg = "./images/rock-left.svg"
        }
        if (userChoice === "Paper") {
            userIconimg = "./images/paper-left.svg"
        }
        if (userChoice === "Scissor") {
            userIconimg = "./images/scissor-left.svg"
        }
        yourImg.src = userIconimg
    },3000)
    setTimeout(() => {
        computer_value()
        result_value()       
    }, 3000)
    setTimeout(() => {        
        userScores()
        computerScores()
        
    },3200)
}))

const computer_value = () => {
    let randomChoice = Math.floor(Math.random() * 3)+ 1
    console.log(randomChoice)
    if (randomChoice === 1) {
        computerChoice = "Rock";
        computerIconimg = "./images/rock-right.svg";
    }
    if (randomChoice === 2) {
        computerChoice = "Paper";
        computerIconimg = "./images/paper-right.svg";
    }
    if (randomChoice === 3) {
        computerChoice = "Scissor";
       computerIconimg = "./images/scissor-right.svg";
    }
    computerDisplay.innerHTML = computerChoice;
    computerImg.src = computerIconimg;
    
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