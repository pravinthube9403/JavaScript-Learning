
let ramdomNum = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
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
    else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMsg(`Game Over. Random number was ${ramdomNum}`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }

    }
}

function checkGuess(guess) {
    //checking the guess high or low
    if (guess === ramdomNum) {
        displayMsg("your Guested it right")
        endGame();
    }
    else if (guess < ramdomNum) {
        displayMsg("number is too Low")
    }
    else if (guess > ramdomNum) {
        displayMsg("number is too High")
    }
}
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMsg(msg) {
    //dom manipulation
    lowHigh.innerHTML = `<h2>${msg}</h2>`
}


function endGame() {
    userInput.value = ''
    userInput.setAttribute("disabled", "")
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame")

    newGameButton.addEventListener("click", (e) => {
        ramdomNum = parseInt(Math.random() * 10 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

