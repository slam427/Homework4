// The array of questions for our quiz game

var questionAnswerArray = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answerA: "<javascript>",
        answerB: "<script>",
        answerC: "<js>",
        answerD: "<scripting>",
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the following HTML element?" + " " + "id=demo>This is a demonstration.</p>",
        answerA: "#demo.innerHTML='Hello World'",
        answerB: "document.getElementByName('p').innerHTML='Hello World!'",
        answerC: "document.getElementByName('demo').innerHTML='Hello World!'",
        answerD: "document.getElement('p').innerHTML='Hello World!'",
    },
    {
        question: "Where is the correct place to insert a JavaScript",
        answerA: "The <head> section",
        answerB: "Both the <head> and the <body> section are correct",
        answerC: "The <body> section",
        answerD: "The <title> section",
    },
    {
        question: "How do you create a function in JavaScript?",
        answerA: "function = myFunction",
        answerB: "function:myFunction()",
        answerC: "function myFunction",
        answerD: "Very Carefully...",
    }
];

let answerButtonA = document.getElementById("buttonA");
let answerButtonB = document.getElementById("buttonB");
let answerButtonC = document.getElementById("buttonC");
let answerButtonD = document.getElementById("buttonD");
let quizDiv = document.getElementById("quiz");
let questionDiv = document.createElement("div");
let viewHighScores;
let startButton = document.createElement("button");
let currentIndex = 0;
let currentQuestion = questionAnswerArray[currentIndex].question;
let currentAnswers = questionAnswerArray[currentIndex];
let remainingTime = 120;
let timerLocation = document.getElementById("Timer");
let incorrectAnswer = 0;
startButton.textContent = "Start the Quiz!";
quizDiv.append(startButton);
let correctAnswer = 0;


// START BUTTON=============================================================================
startButton.addEventListener("click", startClickHandler);
function startClickHandler() {
    startButton.remove();
    nextQuestion();
    
    let timer = setInterval(function () {
        remainingTime--;
        timerLocation.textContent = remainingTime + " " + "seconds left";
        
        if (remainingTime === 0 || currentIndex > questionAnswerArray.length-1) {
            clearInterval(timer);
            notifyTimeLeft();
        } 
    }, 1000);
    
    function notifyTimeLeft() {
        timerLocation.textContent = " Times up!";
    }

    answerButtonA.addEventListener("click", nextQuestion);
    answerButtonB.addEventListener("click", nextQuestion);
    answerButtonC.addEventListener("click", nextQuestion);
    answerButtonD.addEventListener("click", nextQuestion);

    function nextQuestion() {

        if(currentIndex > questionAnswerArray.length-1) {
        questionDiv.textContent = "Congratulations You have Completed the Quiz!";
        clearInterval(timer);
        } else {
        questionDiv.textContent = questionAnswerArray[currentIndex].question;
        answerButtonA.textContent = questionAnswerArray[currentIndex].answerA;
        answerButtonB.textContent = questionAnswerArray[currentIndex].answerB;
        answerButtonC.textContent = questionAnswerArray[currentIndex].answerC;
        answerButtonD.textContent = questionAnswerArray[currentIndex].answerD;
    }
    currentIndex++;
    }
        quizDiv.appendChild(questionDiv);
        questionDiv.append(currentQuestion);
}
