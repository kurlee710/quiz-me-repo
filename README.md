# Quiz Me App

## Overview
The Quiz Me App is a user-friendly, interactive quiz application designed to test users' knowledge on various topics.
It features a clean interface, a time-bound quiz, and allows users to track their performance.


## Features
- **User Registration** 
Users enter their name and email before starting the quiz.
- **Form Submission**
The form is used to capture the user’s name and email. It validates the input fields and stores them in localStorage for later use.
- **Quiz Data**
An array of objects, quizData, holds the quiz questions, possible choices, and the correct answers.
- **Quiz Flow**

1. Timer:  A countdown timer is displayed once the quiz starts. When the timer hits zero, a modal appears informing the user that time is up.
2. Start Quiz: Clicking the “Start Quiz” button triggers the timer and loads the first question.
3. Load Question: Each question along with its choices is dynamically generated using the loadQuiz() function.
4. Next Question: A “Next Question” button allows users to proceed to the next question, checking if their answer was correct and updating the score.

- **Real-Time Scoring**
The app calculates and displays the score at the end of the quiz.
Each answer is checked against the correct answer. Feedback is provided (e.g., “right” or “wrong”),and score is displayed after each question and the final score is displayed at the end of the quiz.

- **Theme Switch**
Users can toggle between light and dark themes using a switch, with the preference stored in localStorage to persist the theme across sessions.

- **Responsive Design**
The app adjusts to different screen sizes, ensuring usability on both mobile and desktop devices.

**Pages & Navigation**
1. Home: The landing page that welcomes users to the app.

2. Results: Users can view their previous quiz results.

3. Help: Provides guidance and instructions on how to use the app.

## How to Use
- Start: On the homepage, enter your name and email to begin the quiz.

- Take the Quiz: Answer the questions within the time limit displayed.

- Review Score: At the end of the quiz, see your score and whether your answers were correct.

- Theme Toggle: Use the theme switch to change between light and dark modes.

## Privacy Policy & Terms of Service
Links to the Privacy Policy and Terms of Service are available in the footer of the app.

## Technologies Used
HTML, CSS,Bootstrap 5 & JavaScript: Core technologies used for building the app’s structure, styling, and interactivity.

**Local Storage**
Used to persist user data like quiz scores and theme preferences.

**HERE IS THE LINK TO THE QUIZ-ME APP DEPLOYEMD APPLCATION**
https://kurlee710.github.io/quiz-me-repo/







