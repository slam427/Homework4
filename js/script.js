// The array of questions for our quiz game
var correctAnswers = "B, C, B, C"
var quizQuestionsArray = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answerA: "<javascript>",
        answerB: "<script>",
        answerC: "<js>",
        answerD: "<scripting>",
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the following HTML element?" + "<p id=demo>This is a demonstration.</p>",
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


let quizDiv = document.getElementById("quiz");
console.log(document.getElementById("quiz"));
let startButton = document.createElement("button");

startButton.textContent = "Start the Quiz!";

quizDiv.append(startButton);

startButton.addEventListener("click", startClickHandler);

var viewHighScores;



const startTime = 60;
var timerLocation = document.getElementById("Timer")
var remainingTime = startTime-1;
function displayClock(){
var remainingTime= startTime

}

var timer = setInterval(displayClock(), 1000)




// var countdownTimer = setInterval(displayClock, 1000);
// var startTime = 60;
// var remainingTime = startTime - 1;
// function displayClock() {
//     timerLocation.textContent(remainingTime);
//     console.log("display clock please",displayClock);
// }


quizQuestionsArray[0].answerB = true;
quizQuestionsArray[1].answerC = true;
quizQuestionsArray[2].answerB = true;
quizQuestionsArray[3].answerC = true;


function startClickHandler(event) {

    var theQuestion = document.getElementById("questionDisplay");
    var questionDiv = document.createElement("div");
        // console.log("start button works!", startClickHandler);
    console.log(event);
    startButton.remove();

    theQuestion.appendChild(questionDiv)

    questionDiv.append(quizQuestionsArray[0].question)
    // console.log("where question populates", questionDiv);
    document.getElementsByClassName("button");
    console.log("trying class assignment", document.getElementsByClassName("button"));

    }

    

    var answerButtons = document.getElementsByClassName("button");
    answerButtons.addEventListener("click", answerButtonClickHandler);
    function answerButtonClickHandler(){
    theQuestion.remove();
    theQuestion();
    theQuestion.appendChild(questionDiv);
    questionDiv.append(quizQuestionsArray[1].question);
}









