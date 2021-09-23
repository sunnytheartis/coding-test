var testButton = document.getElementById("#testButton");
var questionEl = [
    {quest:"What are the questions",
    firstChoice:"1:"+"Do",
    secChoice:"2:"+"not",
    thirdChoice:"3:"+"know",
    fourthChoice:"4:"+"that",
    correctAnswer:"4"
    },
    {quest:"What are  questions",
    firstChoice:"1:"+"Do",
    secChoice:"2:"+"not",
    thirdChoice:"3:"+"know",
    fourthChoice:"4:"+"that",
    correctAnswer:"3"
    },
    {quest:"What  the questions",
    firstChoice:"1:"+"Do",
    secChoice:"2:"+"not",
    thirdChoice:"3:"+"know",
    fourthChoice:"4:"+"that",
    correctAnswer:"2"
    },
    {quest:"What  questions",
    firstChoice:"1:"+"Do",
    secChoice:"2:"+"not",
    thirdChoice:"3:"+"know",
    fourthChoice:"4:"+"that",
    correctAnswer:"1"
    },
];

function askQuestions(){
   li1.innerHTML = questionEl[index].firstChoice;
   li2.innerHTML = questionEl[index].secChoice;
   li3.innerHTML = questionEl[index].thirdChoice;
   li4.innerHTML = questionEl[index].fourthChoice;
}
function askNextQuestion(){
    if (index<5){
        index++;
        askQuestions();
    }
}
function timerSet(){

}
//testButton.addEventListener("click", buttonClick)
testButton.addEventListener('click', buttonClick)
function buttonClick(){

    console.log("Button has been clicked")


}