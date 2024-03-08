const highScoreElement=document.querySelector("#highscores")

function displayScore(){

const savedScore=JSON.parse(localStorage.getItem("savedScore"))||[]

for (var i=0; i<savedScore.length; i++){

    var score=document.createElement("li")
    score.textContent=`${savedScore[i].initials}-${savedScore[i].score}`
    highScoreElement.appendChild(score)
}

}

window.addEventListener("DOMContentLoaded",displayScore)