var quizArea = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");

var timerCount = 60;
var score;

    var questions = [
        {
            question: "What team is the best in the Premier league?",
            answerChoices: ["Manchester United", "Liverpool", "Manchester City", "Arsenal"],
            correctAnswer: "Manchester United"
        },

        {
            question: "What team is the bandwagon team in the Premier league?",
            answerChoices: ["Manchester United", "Liverpool", "Manchester City", "Arsenal"],
            correctAnswer: "Manchester City"
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

function startGame(event) {
    event.preventDefault();
    
}