// DEPENDENCIES ------------------------------------------------------------
const startBtn = document.getElementById("start-quiz");
const submitBtn = document.getElementById("submit-btn");
const quizContainer = document.getElementById("quiz-container");
const feedbackEl = document.getElementById("feedback");
const scoreBoardEl = document.getElementById("score-board");
const timerEl = document.querySelector(".timer");

// DATA -------------------------------------------------------------------
let timeLeft = 30;
let userScore = 0;
let currentQuestionIndex = 0;
// create an array of objects  that stores correct answers
let quizData = [
  {
    question: "what does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    CorrectAnswer: "Hyper Text Markup Language",
  },

  {
    question: "Which HTML attribute is used to define inline styles?",
    choices: ["styles", "style", "class"],
    CorrectAnswer: "styles",
  },
  {
    question:
      "In a CSS document, how do you select all p elements inside a div element?",
    choices: ["div + p", "div p", "div.p"],
    CorrectAnswer: "div p",
  },
];

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
  return userAnswer;
}

// function that stores user score

// USER INTERACTIONS ------------------------------------------------------
// function to startQuiz
startBtn.addEventListener("click", function () {
  //   console.log("start quiz button clicked");
  // starts a timer for each question
  startTimer();
  // loads the first question
  loadQuiz(quizData[currentQuestionIndex]);
});

// console log user answer on clicking submit button
submitBtn.addEventListener("click", function () {
  console.log(userAnswer);
});

// INITIALIZATION ---------------------------------------------------------
storeUserAnswer();

//   // store each question score in local storage - json.stringify - part of if-else statement
//   localStorage.setItem("userScore", JSON.stringify(userScore));

// Create a Next Question button
const nextQuestionBtn = document.getElementById("next-question");

// Function to handle moving to the next question
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuiz(quizData[currentQuestionIndex]);
  } else {
    endQuiz();
  }
}
console.log(quizData);

nextQuestionBtn.addEventListener("click", nextQuestion);

// Modify loadQuiz to take an index to load specific question
function loadQuiz(questionData) {
  feedbackEl.innerHTML = "";

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

// Function to handle end of the quiz
function endQuiz() {
  quizContainer.innerHTML = `
    <h2>Quiz Over!</h2>
    <p>Your final score is: ${userScore}</p>
  `;
  // Hide Next Question button
  nextQuestionBtn.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuiz(quizData[currentQuestionIndex]);
});
