const optionsContainer = document.querySelector(".options");
const resultText = document.querySelector("#resultText");
const userIcon = document.querySelector("#userIcon");
const computerIcon = document.querySelector("#computerIcon");
const choicesContainer = document.querySelector("#choices");
const playAgainButton = document.querySelector("#playAgain");
const userScoreText = document.querySelector("#userScore");
const computerScoreText = document.querySelector("#computerScore");
const versus = document.querySelector("#versus");

let userScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

document.querySelectorAll(".options button").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.classList[0];
        playGame(userChoice);
    });
});

playAgainButton.addEventListener("click", () => {
    optionsContainer.style.display = "flex";
    resultText.textContent = "";
    userIcon.className = "";
    computerIcon.className = "";
    playAgainButton.style.display = "none";
    versus.style.display = "none";
});

function playGame(userChoice) {

    const computerChoice = options[Math.floor(Math.random() * options.length)];
    optionsContainer.style.display = "none";

    userIcon.className = `fas fa-${userChoice === "rock" ? "fist-raised" : (userChoice === "paper" ? "sticky-note" : "hand-scissors")}`;
    computerIcon.className = `fas fa-${computerChoice === "rock" ? "fist-raised" : (computerChoice === "paper" ? "sticky-note" : "hand-scissors")}`;

    let result = "";
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        userScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    playAgainButton.style.display = "flex";
    versus.style.display = "flex";
    versus.style.alignItems = "center";
    versus.style.justifyContent = "center";
    versus.style.padding = "50px";


    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;
    resultText.textContent = result;
}
