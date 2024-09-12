//DATA
const questionData = quizData[currentQuestionIndex];
const quizContainer = document.getElementsByClassName('card');
const feedbackEl = document.getElementById('feedback');
const scoreBoardEl = document.getElementById('score-board');



// create an array of objects  that stores correct answers
const quizData = [
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

let currentQuestionIndex = 0;
let score =0;

// creating event listeners for loading a quiz and handling the next question.
document.addEventListener('DOMContentLoaded', loadQuiz);
document.getElementsById('start-quiz').addEventListener('click', renderQuestion);

  // Function to render the current question
  // when the start quiz button os clicked

function renderQuestion() {
    const quizList= document.getElementsById('quiz-list');
  
    // Clear any previous feedback CONTENT 
    feedbackEl.innerHTML = '';
    quizList.innerHTML = '';

    // Render the question and its choices
    quizData.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <div class="question">
            <h3>Question ${index + 1}: ${item.question}</h3>
            ${item.choices.map((choice, i) => `
              <div class="form-check">
                <input type="radio" name="question${index}" id="choice${index}_${i}" value="${choice}" class="form-check-input">
                <label for="choice${index}_${i}" class="form-check-label">${choice}</label>
              </div>
            `).join('')}
          </div>
        `;
        quizList.appendChild(listItem);
      });
    }
    
      //the renderQuestion function dynamically generates the HTML for each question and its corresponding choices.
//map() fn is used to loop over the choices array 
//and create radio buttons for each choice.
  
  document.addEventListener('DOMContentLoaded', renderQuestion);