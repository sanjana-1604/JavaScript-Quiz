
const start_btn = document.getElementById("start");
const questionSection = document.getElementById("questions");
const startScreen = document.getElementById("start-screen");
const timer = document.querySelector("#time");
const feedback = document.querySelector(".feedback");
const endScreen = document.getElementById("end-screen");
const inputInitials = document.getElementById("initials");
const submit = document.getElementById("submit");
const finalScore = document.getElementById("final-score");

let questionTitle = document.querySelector("#question-title");
let answereOptions = document.querySelector(".choices");
let questionCounter = 0;
let timerCounter = 65;
let ol;
let li;
let button;
let time;
let totalQuestions;


function showScreen(screen, toShow) {
    if (toShow == true) {
        screen.classList.remove("hide");
        screen.classList.add("start");
    }
    else {
        screen.classList.remove("start");
        screen.classList.add("hide");
    }
}

//Start the quiz
start_btn.addEventListener("click", (event) => {
    showScreen(questionSection, true);
    startScreen.classList.add("hide");
    totalQuestions = Object.keys(data.Question).length;;

    createQuestionScreen();
    startTimer();
});

//create Question screen
function createQuestionScreen() {
    let i = 0;
    let tempArr = data.Question[questionCounter].A;

    ol = document.createElement("ol");
    questionTitle.innerText = data.Question[questionCounter].Q;
    tempArr.forEach((item) => {
        li = document.createElement("li");
        button = document.createElement("button");
        li.setAttribute("data-index", i);
        let newNode = document.createTextNode(item.option);
        li.appendChild(newNode);
        button.appendChild(li);
        ol.appendChild(button);
        i++;
    });
    // i = 0;
    answereOptions.appendChild(ol);
}
//Reset the question screen
function resetQuestion() {
    answereOptions.removeChild(ol);
}

//eventListener for option buttons
answereOptions.addEventListener("click", (e) => {
    var i = e.target.getAttribute('data-index');

    showScreen(feedback, true)

    if (questionCounter >= totalQuestions - 1){
        if (data.Question[questionCounter].A[i].correct === "true") {

            feedback.innerText = "Correct!";
            var audio = new Audio('sfx/correct.wav');
            audio.play();
            timerCounter--;

        }
        else {
            feedback.innerText = "Wrong!";
            var audio = new Audio('sfx/incorrect.wav');
            audio.play();
            timerCounter -= 5;
        }
        createEndScreen();
    }
    else {

        if (data.Question[questionCounter].A[i].correct === "true") {

            feedback.innerText = "Correct!";
            var audio = new Audio('sfx/correct.wav');
            audio.play();
            timerCounter--;

        }
        else {
            feedback.innerText = "Wrong!";
            var audio = new Audio('sfx/incorrect.wav');
            audio.play();
            timerCounter -= 5;
        }
        questionCounter++;
        resetQuestion();
        createQuestionScreen();
    }

});

//End Screen 
function createEndScreen() {
    var input;
    showScreen(endScreen, true);
    finalScore.innerText = timerCounter;
    clearTimeout(time);
    timer.innerText = 65;
    showScreen(questionSection, false);
}

inputInitials.addEventListener("click", () => {
    showScreen(feedback, false);
});
submit.addEventListener("click", () => {
    input = inputInitials.value;
    localStorage.setItem(input, timerCounter);
    location.href = "highscores.html";

});

//start timer
function startTimer() {
    time = setInterval(() => {
        timer.innerText = timerCounter;
        timerCounter--;
        if(timerCounter == 0)
        {
            createEndScreen();
        }
    }, 1000);

}
