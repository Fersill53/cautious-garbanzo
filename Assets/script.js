var quizArea = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click', startGame);
var questionContainerElement = document.getElementById('questBox');
var shfQuestions, currentQuestionIndex;
var

var timerCount = 60;
var score;

    var questions = [
        {
            question: "What team is the best in the Premier league?",
            answerChoices: [
                {text: 'Manchester United', correct: true}, 
                {text: 'Liverpool', correct: false}, 
                {text: 'Manchester City', correct: false}, 
                {text: 'Arsenal', correct: false}]
            
        },

        {
            question: "What team is the bandwagon team in the Premier league?",
            answerChoices: [
                {text: 'Manchester United', correct: false}, 
                {text: 'Liverpool', correct: false}, 
                {text: 'Manchester City', correct: true}, 
                {text: 'Arsenal', correct: false}]

        },

        {
            question: "What team is the best in La Liga?",
            answerChoices: ["Barcelona", "Villareal", "Real Madrid", "Valencia"],
            correctAnswer: "Real Madrid"
        },

        {
            question: "Who is the best soccer player in the World?",
            answerChoices: ["Mbappe", "Pele", "Messi", "Ronaldo"],
            correctAnswer: "Ronaldo"
        },

        {
            question: "What team is the best in the Premier league?",
            answerChoices: ["Manchester United", "Liverpool", "Manchester City", "Arsenal"],
            correctAnswer: "Manchester United"
        },

        {
            question: "What is the word the knights who say ni cannot hear?",
            answerChoices: ["that", "is", "herring", "it"],
            correctAnswer: "it"
        },

    ]

var currentQuestion = 0;

//function startGame(event) {
    //event.preventDefault();
    
//}

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

}

function selectAnswer() {

}