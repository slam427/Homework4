  // The array of questions for our quiz game
  var correctAnswers = "B, C, B, C"
  let quizQuestionsArray = [
    {
        Question:"Inside which HTML element do we put the JavaScript?",
        answerA: "<javascript>",
        answerB: "<script>",
        answerC: "<js>",
        answerB: "<scripting>",
    },
    {
        Question:"What is the correct JavaScript syntax to change the content of the following HTML element?" + "<p id=demo>This is a demonstration.</p>",
        answerA: "#demo.innerHTML='Hello World'",
        answerB: "document.getElementByName('p').innerHTML='Hello World!'",
        answerC: "document.getElementByName('demo').innerHTML='Hello World!'",
        answerB: "document.getElement('p').innerHTML='Hello World!'",
    },
    {
        Question:"Where is the correct place to insert a JavaScript",
        answerA: "The <head> section",
        answerB: "Both the <head> and the <body> section are correct",
        answerC: "The <body> section",
        answerB: "The <title> section",
    },
    {
        Question:"How do you create a function in JavaScript?",
        answerA: "function = myFunction",
        answerB: "function:myFunction()",
        answerC: "function myFunction",
        answerB: "Very Carefully...",
    }
        
  ];

let quizDiv = document.getElementById("quiz");
console.log(document.getElementById("quiz"));
let startButton = document.createElement("button");
startButton.textContent = "Start the Quiz!";
quizDiv.append(startButton);
startButton.addEventListener("click", startClickHandler);

console.log("start button clicked", startClickHandler);

function startClickHandler(event){
    console.log(event.target);  
}







