// Create a code quiz that contains the following requirements:

// A start button that when clicked a timer starts and the first question appears.

// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
var questionIndex = 0
var timerElement = document.querySelector(".timer")
var startButton = document.querySelector("#start")
var questionsElement= document.querySelector("#questions")
var questionTitle=document.querySelector("#question-title")
var choicesElement=document.querySelector("#choices")
var startScreen= document.querySelector("#start-screen")
console.log(startButton)
var timerCount= 100
function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = "Time: "+ timerCount;
      if (timerCount >= 0) {
          clearInterval(timer);
          // QuizFinish();
        }
    }, 1000);
  }
function displayQuestions(){
  console.log(questions)
questionsElement.classList.remove("hide")
startScreen.classList.add("hide")
questionTitle.textContent=questions[questionIndex].question
var buttonChoices=questions[questionIndex].answers
let choices=""
for(var i=0; i<buttonChoices.length;i++){
  choices+=`<button>${buttonChoices[i]}</button>`
  choicesElement.innerHTML=choices
}
}
choicesElement.addEventListener("click",function(event){
event.preventDefault()
if(event.target.matches("button"))
})




  startButton.addEventListener("click",function(){
    console.log("click")
    startTimer()  
    displayQuestions()
  })