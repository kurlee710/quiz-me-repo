// DEPENDENCIES ------------------------------------------------------------
const startBtn = document.getElementById("start-quiz");
const submitBtn = document.getElementById("submit-btn");
const quizContainer = document.getElementById("quiz-container");
const feedbackEl = document.getElementById("feedback");
const scoreBoardEl = document.getElementById("score-board");
const timerEl = document.querySelector(".timer");
const answer = document.getElementById("answer");

// DATA -------------------------------------------------------------------
let timeLeft = 30;
let currentQuestionIndex = 0;
let userScore = 0;
// create an array of objects  that stores correct answers
let quizData = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },

  {
    question: "Which HTML attribute is used to define inline styles?",
    choices: ["styles", "style", "class"],
    correctAnswer: "styles",
  },
  {
    question:
      "In a CSS document, how do you select all p elements inside a div element?",
    choices: ["div + p", ".div p", ".div.p"],
    correctAnswer: ".div p",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["Head", "Body", "Both head and body can be used"],
    correctAnswer: "Both head and body can be used",
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    choices: ["Math.round(7.25)", "Math.rnd(7.25)", "round(7.25)"],
    correctAnswer: "Math.round(7.25)",
  },
];

// FUNCTIONS -----------------------------------------------

const form = document.getElementById("userForm");

console.log("form", form);

///Add an event listener to handle form submission
form.addEventListener("submit", function (event) {
  console.log(event);
  //Prevent the form from actually submitting
  event.preventDefault();

  // Get the values from the form inputs
  const name = event.target[0].value;
  const email = event.target[1].value;
  if (!name && !email) {
    alert("please enter email and name !");
  } else if (!name) {
    alert("please enter name !");
  } else if (!email) {
    alert("please  enter email");
  }
  ("");

  // // store the data in localStorage or handle it further
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);

  console.log(name);
  console.log(email);

  //After storing the data or handling it, the input fields are cleared by setting their values to an empty string:
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
});

// function to start timer when quiz starts
function startTimer() {
  let timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds remaining";
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      showTimeUpModal(); // Show the modal when time runs out
    } else if (currentQuestionIndex === quizData.length) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function showTimeUpModal() {
  const timeUpModalEl = document.getElementById("timeUpModal"); // Get the modal by ID
  const timeUpModal = new bootstrap.Modal(timeUpModalEl); // Initialize the Bootstrap modal
  timeUpModal.show(); // Show the modal
}
let questionData = quizData[currentQuestionIndex];
// Function to render the current question when the start quiz button is clicked
//the loadQuestion function dynamically generates
//the HTML for each question and its corresponding choices.
//map() fn is used to loop over the choices array
//and create radio buttons for each choice.
// Modify loadQuiz to take an index to load specific question
function loadQuiz(questionData) {
  // Clear any previous feedback CONTENT
  //feedbackEl.innerHTML = " ";
  // Get the current question - created a local variable instead of a global variable.

  quizContainer.innerHTML = `
      <h2>${questionData.question}</h2>
     ${questionData.choices
       .map(
         (choice, index) => `
       <div class="form-check">
          <input type="radio" name="answer" id="choice${index}" value="${choice}" class="form-check-input">
           <label for="choice${index}" class="form-check-label">${choice}</label>         </div>
       `
       )
       .join("")}
    `;
}

// function that stores user answers
function storeUserAnswer() {
  let userAnswer = "";
  const choices = document.querySelectorAll('input[name="answer"]');

  // Loop through choices to find the checked one
  for (let choice of choices) {
    if (choice.checked) {
      userAnswer = choice.value;
      break;
    }
  }
  return userAnswer;
}
// function to startQuiz
startBtn.addEventListener("click", function () {
  //   console.log("start quiz button clicked");
  // starts a timer for each question
  startTimer();
  // loads the first question
  loadQuiz(quizData[currentQuestionIndex]);
  // display next question button
  document.getElementById("next-question").style.display = "block";
});

// // console log user answer on clicking submit button
// submitBtn.addEventListener("click", function () {
//   console.log(userAnswer);
// });

// INITIALIZATION ---------------------------------------------------------
storeUserAnswer();

// Create a Next Question button
const nextQuestionBtn = document.getElementById("next-question");

// Function to handle moving to the next question
function nextQuestion() {
  const userAnswer = storeUserAnswer();
  if (userAnswer === quizData[currentQuestionIndex].correctAnswer) {
    feedbackEl.innerHTML = "Correct";
    feedbackEl.style.color = "rgb(130 231 63)";
    userScore++;
  } else {
    feedbackEl.innerHTML = "Incorrect";
    feedbackEl.style.color = "#a20b0b";
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuiz(quizData[currentQuestionIndex]);
  } else {
    endQuiz();
  }
}
console.log(quizData);

// // Function to render the current question when the start quiz button is clicked
// //the loadQuestion function dynamically generates
// //the HTML for each question and its corresponding choices.
// //map() fn is used to loop over the choices array
// //and create radio buttons for each choice.
// // Modify loadQuiz to take an index to load specific question

nextQuestionBtn.addEventListener("click", nextQuestion);
// Function to handle end of the quiz
function endQuiz() {
  quizContainer.innerHTML = `
    <h2>Quiz Over!</h2>
    <p>Your final score is: ${userScore}</p>
  `;
  // Hide Next Question button
  nextQuestionBtn.style.display = "none";
  //nextQuestionBtn.style.display = "none";
  scoreBoardEl.textContent = `Final Score: ${userScore}`;
}

function themeSwitch() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-bs-theme");

  if (currentTheme === "light") {
    body.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark"); // Store the theme in localStorage
  } else {
    body.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

document
  .getElementById("flexSwitchCheckChecked")
  .addEventListener("click", themeSwitch);

// On page load, check for saved theme in localStorage
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.setAttribute("data-bs-theme", savedTheme);
    document.getElementById("flexSwitchCheckChecked").checked =
      savedTheme === "dark";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  loadQuiz(quizData[currentQuestionIndex]);
});
