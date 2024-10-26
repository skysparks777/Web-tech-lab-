let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let questionCount = 0;
let timer;
let timeLimit = 10;
let currentQuestion;
let difficultyLevels = ["easy", "hard", "hardest"];
let currentLevelIndex = 0;

const gameStart = document.getElementById("game-start");
const levelInfo = document.getElementById("level-info");
const game = document.getElementById("game");
const result = document.getElementById("result");
const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answer");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const resultMessage = document.getElementById("resultMessage");
const finalScore = document.getElementById("final-score");
const correctAnswersDisplay = document.getElementById("correct-answers");
const incorrectAnswersDisplay = document.getElementById("incorrect-answers");
const levelName = document.getElementById("level-name");

function startGame() {
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    questionCount = 0;
    currentLevelIndex = 0;

    gameStart.classList.add("hidden");
    result.classList.add("hidden");
    showLevelInfo();
}

function showLevelInfo() {
    levelInfo.classList.remove("hidden");
    levelName.textContent = `Level ${currentLevelIndex + 1}: ${capitalizeFirstLetter(difficultyLevels[currentLevelIndex])}`;
}

function beginLevel() {
    levelInfo.classList.add("hidden");
    game.classList.remove("hidden");
    nextQuestion();
}

function nextQuestion() {
    if (questionCount >= 2) {
        currentLevelIndex++;
        questionCount = 0;
        
        if (currentLevelIndex >= difficultyLevels.length) {
            endGame();
            return;
        } else {
            game.classList.add("hidden");
            showLevelInfo();
            return;
        }
    }

    currentQuestion = generateQuestion(difficultyLevels[currentLevelIndex]);
    questionEl.textContent = currentQuestion.question;
    answerInput.value = "";
    startTimer();
}

function generateQuestion(difficulty) {
    let num1, num2, question, answer;

    switch (difficulty) {
        case "easy":
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = num1 + num2;
            question = `${num1} + ${num2}`;
            break;
        case "hard":
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * 20) + 1;
            answer = num1 * num2;
            question = `${num1} * ${num2}`;
            break;
        case "hardest":
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * 50) + 1;
            answer = num1 - num2;
            question = `${num1} - ${num2}`;
            break;
    }
    return { question, answer };
}

function startTimer() {
    let timeLeft = timeLimit;
    timerEl.textContent = `Time left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(false);
        }
    }, 1000);
}

function submitAnswer() {
    const userAnswer = parseInt(answerInput.value);
    clearInterval(timer);
    checkAnswer(userAnswer === currentQuestion.answer);
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        score++;
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }
    scoreEl.textContent = `Score: ${score}`;
    questionCount++;
    nextQuestion();
}

function endGame() {
    game.classList.add("hidden");
    result.classList.remove("hidden");

    resultMessage.textContent = score === difficultyLevels.length * 2
        ? "Congratulations! You have cleared the PhD test!"
        : "Quiz Complete!";

    finalScore.textContent = `Final Score: ${score}`;
    correctAnswersDisplay.textContent = `Correct Answers: ${correctAnswers}`;
    incorrectAnswersDisplay.textContent = `Incorrect Answers: ${incorrectAnswers}`;
}

function restartGame() {
    gameStart.classList.remove("hidden");
    result.classList.add("hidden");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
