// start quiz button to kick off quiz function
const startBtn = document.getElementById("start-quiz");
const timerEl = document.querySelector(".timer");
let timeLeft = 30;

function startTimer() {
  let timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds remaining";
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }, 1000);
}

// function startQuiz() {
startBtn.addEventListener("click", function () {
  console.log("start quiz button clicked");
  startTimer();
  renderQuestion();
});
// }

// counter for user score
userScore = 0;
for (let i = 0; i < questions.choices.length; i++) {
  userAnswer = questions.choices[i];
}
// if-else statement that compares the user answer to correct choice and adds to user score
if (userAnswer === questions.correctChoice) {
  userScore++;
} else {
  userScore--;
}
// store each question score in local storage - json.stringify - part of if-else statement
localStorage.setItem("userScore", JSON.stringify(userScore));
