// DEPENDENCIES ------------------------------------------------------------
const startBtn = document.getElementById("start-quiz");
const submitBtn = document.document.getElementsByName("submit");
const quizContainer = document.getElementById("quiz-container");
const feedbackEl = document.getElementById("feedback");
const scoreBoardEl = document.getElementById("score-board");
const timerEl = document.querySelector(".timer");

// DATA -------------------------------------------------------------------
let timeLeft = 30;
let userScore = 0;
let currentQuestionIndex = 0;
// create an array of objects that stores questions and correct answers
let quizData = [
  {
    question: "what does HTML stand for?",
    choices: [
      "1.Hyper Text Markup Language",
      "2.Home Tool Markup Language",
      "3.Hyperlinks and Text Markup Language",
    ],
    CorrectAnswer: "Hyper Text Markup Language",
  },

  {
    question: "Which HTML attribute is used to define inline styles?",
    choices: ["1.styles", "2.style", "3.class"],
    CorrectAnswer: "1.styles",
  },
  {
    question:
      "In a CSS document, how do you select all p elements inside a div element?",
    choices: ["1.div + p", "2. div p", "3.div.p"],
    CorrectAnswer: "2.div p",
  },
];

// creating event listeners for loading a quiz and handling the next question.
//document.addEventListener('DOMContentLoaded', loadQuiz);

// FUNCTIONS -----------------------------------------------

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

// Function to render the current question when the start quiz button is clicked
//the loadQuestion function dynamically generates
//the HTML for each question and its corresponding choices.
//map() fn is used to loop over the choices array
//and create radio buttons for each choice.

function loadQuiz() {
  // Clear any previous feedback CONTENT
  feedbackEl.innerHTML = "";
  // Get the current question - created a local variable instead of a global variable. resolves the error of 'Cannot access 'quizData' before initialization'
  let questionData = quizData[currentQuestionIndex];

  quizContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.choices
          .map(
            (choice, index) => `
          <div class="form-check">
            <input type="radio" name="answer" id="choice${index}" value="${choice}" class="form-check-input">
            <label for="choice${index}" class="form-check-label">${choice}</label>
          </div>
        `
          )
          .join("")}
      `;
}
// function to handle the next question when submit button is clicked

// function that stores user answers
function storeUserAnswer() {
  let userAnswer = "";
  let choices = document.getElementsByName("answer");
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      userAnswer = choices[i].value;
    }
  }
  console.log(userAnswer);
  return userAnswer;
}

// USER INTERACTIONS ------------------------------------------------------
// function to startQuiz
startBtn.addEventListener("click", function () {
  //   console.log("start quiz button clicked");
  // starts a timer for each question
  startTimer();
  // loads the first question
  loadQuiz(quizData[currentQuestionIndex]);
});

// document.addEventListener("DOMContentLoaded", loadQuiz); - do not need this line of code
//document.addEventListener('DOMContentLoaded', renderQuestion); - do not need this line of code

// INITIALIZATION ---------------------------------------------------------

//   // counter for user score
//   for (let i = 0; i < questions.choices.length; i++) {
//     userAnswer = questions.choices[i];
//   }
//   // if-else statement that compares the user answer to correct choice and adds to user score
//   if (userAnswer === quizData.correctChoice) {
//     userScore++;
//   } else {
//     userScore--;
//   }
//   // store each question score in local storage - json.stringify - part of if-else statement
//   localStorage.setItem("userScore", JSON.stringify(userScore));
