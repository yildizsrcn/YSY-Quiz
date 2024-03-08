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
var endScreen= document.querySelector("#end-screen")
var finalScore=document.querySelector("#final-score")
var initialsButton=document.querySelector("#submit-btn")
var score=0

var timerCount= 10;
function startTimer() {
    var timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount
      if (timerCount === 0 || questionIndex === questions.length){
          clearInterval(timer)
          // QuizFinish();
        }
    }, 1000);
  }
function displayQuestions(){
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
if(event.target.matches("button")){
checkQuestion(event.target.textContent)
}

})
function checkQuestion(userClick) {
var correctAnswer=questions[questionIndex].correctAnswer
if(userClick===correctAnswer){
score+=10
}else{
  timerCount -=2
}

questionIndex++
if(questions.length>questionIndex){
  displayQuestions()

}else{
  questionsElement.classList.add("hide")
  endScreen.classList.remove("hide")
  finalScore.textContent=score
}
}

function saveInitials () {
  console.log("hello");
  
  const initials=document.querySelector("#initials").value.trim()

  const savedScore=JSON.parse(localStorage.getItem("savedScore"))||[]
  const newScore={
    initials:initials,
    score:score,
  }

  savedScore.push(newScore)
  localStorage.setItem("savedScore",JSON.stringify(savedScore))

}

initialsButton.addEventListener("click",(event)=>{
event.preventDefault()
saveInitials()
})

  startButton.addEventListener("click",function(){
    startTimer()  
    displayQuestions()
  })