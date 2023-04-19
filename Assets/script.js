const quizArea = document.getElementById("quiz");
const startBtn = document.getElementById("startBtn");
const nxtBtn = document.getElementById('nxtBtn')
const questionContainerElement = document.getElementById('questBox');
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answerBtn');

startBtn.addEventListener('click', startGame);
nxtBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('lets go')
    startBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answerChoices.forEach(answerChoices => {
    const button = document.createElement('button')
    button.innerText = answerChoices.text
    button.classList.add('btn')  
    if (answerChoices.correct) {
        button.dataset.correct = answerChoices.correct
    } 
    
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nxtBtn.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) { 
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nxtBtn.classList.remove('hide')
    } else {
        startBtn.inner = 'Restart'
        startBtn.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
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
        answerChoices: [
            {text: 'that', correct: false}, 
            {text: "it", correct: true}, 
            {text: "is", correct: false}, 
            {text: "herring", correct: false}
        ]
        
    }

]