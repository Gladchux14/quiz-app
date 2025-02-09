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
let score = document.querySelector(".score");
const displayquestion  = document.querySelector(".question")

for (let i = data.length; i > 0; i--){
    let currentQuestion = data[data.length - i]
    let questionTitle  = document.createElement("p")
    questionTitle.textContent = currentQuestion.question
    displayquestion.appendChild(questionTitle)
    let optionsContainer  = document.createElement("div")
    displayOptions(currentQuestion.Options, optionsContainer, currentQuestion.correctAnswer)
    displayquestion.appendChild(optionsContainer)
}

function displayOptions(options, optionsContainer, correctAnswer){
    for (let i = 0; i < options.length; i++ ){
        let button  = document.createElement("button")
        button.classList  = "btn"
        button.textContent = options[i]
        button.addEventListener("click", (e) =>{
            e.preventDefault()
            const value  = e.target.textContent
            console.log(value  === correctAnswer)
           if (value  === correctAnswer ){
            console.log(score.textContent)
            score.textContent = parseInt(score.textContent)  + 1 
           }
        })
        optionsContainer.appendChild(button)
    }
} 