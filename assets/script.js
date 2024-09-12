// DEPENDENCIES ------------------------------------------------------------
 // DATA -------------------------------------------------------------------
 let timeLeft = 30;
 let userScore = 0;
 let currentQuestionIndex = 0;
// create an array of objects  that stores correct answers
let quizData = [
    {
    question: 'what does HTML stand for?',
    choices:['1.Hyper Text Markup Language','2.Home Tool Markup Language','3.Hyperlinks and Text Markup Language'],
    CorrectAnswer :'Hyper Text Markup Language',
    },
    
    {
        question:'Which HTML attribute is used to define inline styles?',
        choices: ['1.styles','2.style','3.class'],
        CorrectAnswer :'1.styles',
        
    },
    {
        question:'In a CSS document, how do you select all p elements inside a div element?',
        choices:['1.div + p','2. div p','3.div.p'],
        CorrectAnswer :'2.div p',
          
    }
    
    ]
// start quiz button to kick off quiz function
const startBtn = document.getElementById("start-quiz");
const questionData = quizData[currentQuestionIndex];
const quizContainer = document.getElementById('quiz-container');
const feedbackEl = document.getElementById('feedback');
const scoreBoardEl = document.getElementById('score-board');
const timerEl = document.querySelector(".timer");




    





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


// USER INTERACTIONS ------------------------------------------------------
// function to startQuiz
startBtn.addEventListener("click", function() {
    console.log("start quiz button clicked");
    startTimer();
    loadQuiz(quizData[0]);

 
  });
  
  
  document.addEventListener('DOMContentLoaded', loadQuiz);

  // Function to render the current question
  // when the start quiz button os clicked

  function loadQuiz() {
  
    // Clear any previous feedback CONTENT 
    feedbackEl.innerHTML = '';

    quizContainer.innerHTML = `
      <h2>${questionData.question}</h2>
      ${questionData.choices.map((choice, index) => `
        <div class="form-check">
          <input type="radio" name="answer" id="choice${index}" value="${choice}" class="form-check-input">
          <label for="choice${index}" class="form-check-label">${choice}</label>
        </div>
      `).join('')}
    `;   
    }
    
//the renderQuestion function dynamically generates 
//the HTML for each question and its corresponding choices.
//map() fn is used to loop over the choices array 
//and create radio buttons for each choice.
  
//document.addEventListener('DOMContentLoaded', renderQuestion);



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


