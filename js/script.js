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
let currentAnswer = questionAnswerArray[currentIndex];

startButton.textContent = "Start the Quiz!";
quizDiv.append(startButton);

buttonContainer.addEventListener("click", nextQuestion)

function nextQuestion() {
    event.preventDefault();
    questionDiv.textContent = questionAnswerArray[currentIndex].question;
    answerButtonB.textContent = questionAnswerArray[currentIndex].answerB;
    answerButtonA.textContent = questionAnswerArray[currentIndex].answerA;
    answerButtonC.textContent = questionAnswerArray[currentIndex].answerC;
    answerButtonD.textContent = questionAnswerArray[currentIndex].answerD;
    currentIndex++;
}


    // START BUTTON=============================================================================
    startButton.addEventListener("click", startClickHandler);
    function startClickHandler() {
    let remainingTime = 5;
    let timerLocation = document.getElementById("Timer");
    startButton.remove();
    nextQuestion();
    
    function displayTimeLeft() {
        let timer = setInterval(function () {
            remainingTime--;
            timerLocation.textContent = remainingTime + " " + "seconds left";
            
            if (remainingTime === 0) {
                clearInterval(timer);;
                notifyTimeLeft();
            }
        }, 1000);
    }
    function notifyTimeLeft() {
        timerLocation.textContent = " Times up!";
    }
    displayTimeLeft();
    


quizDiv.appendChild(questionDiv);
questionDiv.append(currentQuestion);

//'click' adds to current index 
//but question and answers not changing...???
// //figure out 

//currentIndex should be 1

// let buttonContainer = document.getElementById("buttonContainer");
// let nextQuestion = document.createEvent("MouseEvent");
// // answerSubmit.initMouseEvent("click");
// // buttonContainer.dispatchEvent(nextQuestion);



}

//index at load up = 0=
//index after "start button" = 0




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

// ?????????????Why doesn't this work??????????????????
// function nextQuestion() {
//     event.preventDefault();
//     questionDiv.textContent = currentQuestion;
//     answerButtonA.textContent = currentAnswer.answerA;
//     answerButtonB.textContent = currentAnswer.answerB;
//     answerButtonC.textContent = currentAnswer.answerC;
//     answerButtonD.textContent = currentAnswer.answerD;
//     currentIndex++;
// }


// buttonContainer.addEventListener("click", nextQuestion);

// questionDiv.textContent = questionAnswerArray[currentIndex].question; this works...


// but this doesn't....
// var currentIndex = 0;
// var currentQuestion = questionAnswerArray[currentIndex].question;
//questionDiv.textContent=currentQuestion;