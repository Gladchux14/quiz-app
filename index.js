data = [
    {
        question: "who is the senate president of Nigeria?",
        Options: ["namadi sambo", "Alex Ekweremadu", "Godswill Akpabio"],
        correctAnswer: "Godswill Akpabio",
    },
    {
        question: "who is the Governor of Enugu state?",
        Options: ["Ifeanyi Ugwuanyi", "Peter Mbah", "Chimaraoke Nnamani"],
        correctAnswer: "Peter Mbah",
    },
    {
        question: "what year was the Nigeria Almagamation?",
        Options: ["1960", "1960", "1914"],
        correctAnswer: "1914",
    },
    {
        question: "who invented Javascript?",
        Options: ["Brendan Eich", "Mozilla Foundation", "josh Mosh"],
        correctAnswer: "Brendan Eich",
    },
    {
        question: "who amongst the following achieved the fastest computational records and created the internet?",
        Options: ["Charles Babbage", "Philip Emeagwali", "Amaka Udensi"],
        correctAnswer: "Philip Emeagwali",
    },
]

let currentQuestionIndex = 0;
let score  = 0;
const scoreDisplay = document.querySelector(".score");
const questionDisplay = document.querySelector(".question");
const nextButton = document.querySelector("#next-btn");
const startButton  = document.querySelector(".startButton");
const quizContainer  = document.querySelector(".app");
const doneSection = document.querySelector(".done");
let answeredQuestions = new Set();


nextButton.style.display  = "none";
doneSection.style.display="none"


function startQuiz() {
    startButton.style.display = "none";
    questionDisplay.style.display = "block";
    nextButton.style.display = "block";
    doneSection.style.display="none"
    displayCurrentQuestion();
}

function displayCurrentQuestion(){
    // let currentQuestion = data[data.length - i]
    questionDisplay.innerHTML = " ";
 
    const currentQuestion = data[currentQuestionIndex];
    const questionTitle  = document.createElement("p")
    questionTitle.classList = "tittle";
    questionTitle.textContent = currentQuestion.question
    questionDisplay.appendChild(questionTitle);
    const optionsContainer  = document.createElement("div");
    optionsContainer.classList = "option";
    displayOptions(currentQuestion.Options, optionsContainer, currentQuestion.correctAnswer)
    questionDisplay.appendChild(optionsContainer)
}

function displayOptions(options, optionsContainer, correctAnswer){
    for (let i = 0; i < options.length; i++ ){
        let button  = document.createElement("button")
        button.classList.add("btn");
        // button.classList  = "btn" + i
        button.textContent = options[i]
        button.addEventListener("click", (e) =>{
            e.preventDefault()
            const value  = e.target.textContent;
            // const questionText  = optionsContainer.parentElement.querySelector("p").textContent;
            // if(!answeredQuestions.has(questionText)){
                // answeredQuestions.add(questionText);
                // console.log(value  === correctAnswer)
               if (value  === correctAnswer ){
                score ++; 
                console.log(score.textContent);
                scoreDisplay.textContent = score;
                score.textContent = parseInt(score.textContent)  + 1 ;
                e.target.style.backgroundColor = '#4CAF50';
               }else{
                e.target.style.backgroundColor = '#f44336';
               }

               const allButtonsInQuestion  = optionsContainer.querySelectorAll(".btn");
               allButtonsInQuestion.forEach(btn => btn.disabled = true); 
                nextButton.disabled  = false;
               });
               optionsContainer.appendChild(button);
        }
    }
// } 

function nextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < data.length){
        displayCurrentQuestion();
        nextButton.disabled = true;
    }else {
      questionDisplay.style.display = "none" ;
       nextButton.style.display = "none";
       doneSection.style.display = "block"; 

    }
}

startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", nextQuestion);

