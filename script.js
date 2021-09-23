var testButton = document.getElementById("#testButton");
var questionEl = [
    {quest:"Commonly used data types do not include ____",
    firstChoice:"1:"+"Do",
    secChoice:"2:"+"not",
    thirdChoice:"3:"+"know",
    fourthChoice:"4:"+"that",
    correctAnswer:"4"
    },
    {quest:"Arrays in JavaScript can be used to store:-",
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
    var sec = 100;
    
    var timer = setInterval(function(){
        document.querySelector('.timerText').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
timerSet();
function hidingEl(){
    var x = document.getElementById("highScore");
    if(buttonClick===true){
        x.style.display = "none";
    }else{

    }
}
//testButton.addEventListener("click", buttonClick)

function buttonClick(){

    console.log("Button has been clicked")


}