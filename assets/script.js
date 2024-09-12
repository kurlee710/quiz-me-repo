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


document.addEventListener('DOMContentLoaded', loadQuiz);
function loadQuiz() {
    const questionData = quizData[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    const feedbackEl = document.getElementById('feedback');
    const scoreBoardEl = document.getElementById('score-board');
  
function handleNextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedbackEl = document.getElementById('feedback');
  
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      if (userAnswer === quizData[currentQuestionIndex].correct) {
        score++;
        feedbackEl.innerHTML = '<span class="text-success">Correct!</span>';
      } else {
        feedbackEl.innerHTML = `<span class="text-danger">Wrong! The correct answer is ${quizData[currentQuestionIndex].correct}.</span>`;
      }
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex < quizData.length) {
        // Load the next question after a brief delay
        setTimeout(loadQuiz, 1000); // Wait for 1 second before loading the next question
      } else {
        showResult();
      }