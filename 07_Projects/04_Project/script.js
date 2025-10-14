const ramdomNum = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")

const lowHigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")


const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //validate guess
    if (isNaN(guess)) {
        alert("plx enter a valid number")
    }
    else if (guess < 1) {
        alert("plx enter a  number more than 1")
    }
    else if (guess > 100) {
        alert("plx enter a number less than 100")
    }
}

function checkGuess(guess) {
    //checking the guess high or low
}
function displayGuess(guess) {

}
function displayMsg(msg) {
    //dom manipulation

}


function endGame() {

}

function newGame() {

}

