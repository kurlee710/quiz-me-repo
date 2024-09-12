// start quiz button to kick off quiz function
const startBtn = document.getElementById("start-quiz");

function startQuiz() {
  GamepadButton.addEventListener("click", function () {
    console.log("start quiz button clicked");
  });
}

// counter for user score
userScore = 0;
// if-else statement that compares the user answer to correct choice and adds to user score
if (userAnswer === correctChoice) {
  userScore++;
}
// store each question score in local storage - json.stringify - part of if-else statement
localStorage.setItem("userScore", JSON.stringify(userScore));
