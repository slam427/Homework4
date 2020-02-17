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
let targetQuestionDisplay = document.getElementById("questionDisplay");
let questionDiv = document.createElement("div");
let viewHighScores;
let startButton = document.createElement("button");
var currentIndex = 0;
let currentQuestion = questionAnswerArray[currentIndex].question;
let currentAnswer = questionAnswerArray[currentIndex];

startButton.textContent = "Start the Quiz!";
quizDiv.append(startButton);

startButton.addEventListener("click", startClickHandler);

// START BUTTON=============================================================================
function startClickHandler() {
    let remainingTime = 60;
    let timerLocation = document.getElementById("Timer");
    startButton.remove();
    targetQuestionDisplay.appendChild(questionDiv);
    questionDiv.append(currentQuestion);

    function displayTimeLeft() {
        let timer = setInterval(function () {
            remainingTime--;
            timerLocation.textContent = remainingTime;

            if (remainingTime === 0) {
                clearInterval(timer);
                notifyTimeLeft();
            }
        }, 1000);
    }
    function notifyTimeLeft() {
        timerLocation.textContent = " ";
    }
    displayTimeLeft();
    answerButtonA.textContent = currentAnswer.answerA;
    answerButtonB.textContent = currentAnswer.answerB;
    answerButtonC.textContent = currentAnswer.answerC;
    answerButtonD.textContent = currentAnswer.answerD;
}//currentIndex = 0
// ======================================================================================


let buttonContainer = document.getElementById("buttonContainer")

container1.addEventListener("click", nextQuestion);
//'click' adds to current index 
//but question and answers not changing...???
// //figure out 
function nextQuestion() {
        if (currentIndex <= questionAnswerArray.length) {
        currentIndex++;
        questionDiv.textContent = currentQuestion;
        answerButtonA.textContent = currentAnswer.answerA;
        answerButtonB.textContent = currentAnswer.answerB;
        answerButtonC.textContent = currentAnswer.answerC;
        answerButtonD.textContent = currentAnswer.answerD;
        
        } 
}
nextQuestion;
// function nextQuestion() {
// if (currentIndex <= questionAnswerArray.length) {

//         questionDiv.textContent = currentQuestion.question;
//         answerButtonA.textContent = currentQuestion.answerA;
//         answerButtonB.textContent = currentQuestion.answerB;
//         answerButtonC.textContent = currentQuestion.answerC;
//         answerButtonD.textContent = currentQuestion.answerD;
//     }
//     currentIndex++;
// }

// var answerBButton = document.getElementById("buttonB");
// var answerAText= answerBButton.textContent = questionAnswerArray[0].answerB;

// var answerCButton = document.getElementById("buttonC");
    // answerCButton.textContent = questionAnswerArray[0].answerC;

    // var answerDButton = document.getElementById("buttonD");
    // answerDButton.textContent = questionAnswerArray[0].answerD;

// var question2 = questionAnswerArray[1].question;

// questionAnswerArray[0].answerB = true;
// questionAnswerArray[1].answerC = true;
// questionAnswerArray[2].answerB = true;
// questionAnswerArray[3].answerC = true;


//????????????????Why doesn't the eventlistener stop the for loop from running??????????????
//a little while later...only breaks and continues can?
// for(currentIndex = 1; currentIndex < questionAnswerArray.length; currentIndex++ ) {
//     buttonContainer.addEventListener("click", nextQuestion);
//     function nextQuestion(){
//         questionDiv.textContent = currentQuestion.question;
//         answerButtonA.textContent = currentQuestion.answerA;
//         answerButtonB.textContent = currentQuestion.answerB;
//         answerButtonC.textContent = currentQuestion.answerC;
//         answerButtonD.textContent = currentQuestion.answerD;
//     }
// }
