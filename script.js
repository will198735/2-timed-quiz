var startButton = document.getElementById('start-btn')
var  questionContainerElement = document.getElementById('question-container')

var questionElement = document.getElementById('question')
var answerButttonElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', starGame)

function starGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion (question) {
    questionElement,innerText = question.question

}
 function selectAnswer() {

 }

 var questions = [
    {
    questions: 'what is 2 + 3',
    answer: [
        {Text: '5', correct: true},
        {Text: '22', correct: false}

    ]
}
 ]

