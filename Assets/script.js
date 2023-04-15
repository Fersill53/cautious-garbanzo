var quizArea = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click', startGame);
var questionContainerElement = document.getElementById('questBox');
var shfQuestions, currentQuestionIndex;
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answerBtn');

var timerCount = 60;
var score;

    var questions = [
        {
            question: "What team is the best in the Premier league?",
            answerChoices: [
                {text: 'Manchester United', correct: true}, 
                {text: 'Liverpool', correct: false}, 
                {text: 'Manchester City', correct: false}, 
                {text: 'Arsenal', correct: false}
            ]
            
        },

        {
            question: "What team is the bandwagon team in the Premier league?",
            answerChoices: [
                {text: 'Manchester United', correct: false}, 
                {text: 'Liverpool', correct: false}, 
                {text: 'Manchester City', correct: true}, 
                {text: 'Arsenal', correct: false}
            ]

        },

        {
            question: "What team is the best in La Liga?",
            answerChoices: [
                {text: "Barcelona", correct: false}, 
                {text: "Villareal", correct: false}, 
                {text: "Real Madrid", correct: true}, 
                {text: "Valencia", correct: false}]
            
        },

        {
            question: "Who is the best soccer player in the World?",
            answerChoices: [
                {text:"Mbappe", correct: false}, 
                {text: "Pele", correct: false}, 
                {text: "Messi", correct: false}, 
                {text: "Ronaldo", correct: true}],
            
        },

        {
            question: "What team is underrated in the Premier league?",
            answerChoices: [
                {text: "Wolves", correct: false}, 
                {text: "Brighton", correct: false}, 
                {text: "Westham", correct: false}, 
                {text: "New Castle", correct: true}]
            
        },

        {
            question: "What is the word the knights who say ni cannot hear?",
            answerChoices: ["that", "is", "herring", "it"],
            
        },

    ]



function startGame() {
    console.log('lets go')
    startBtn.classList.add('hide')
    shfQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shfQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answerChoices => {
    const button = document.createElement('button')
    button.innerText = answerChoices.text
    button.classList.add('btn')  
    if (answerChoices.correct) {
        button.dataset.correct = answerChoices.correct
    } 
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild()
    })
}

function selectAnswer() {

}