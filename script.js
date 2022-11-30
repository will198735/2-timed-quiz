var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var  questionContainerElement = document.getElementById('question-container')

var questionElement = document.getElementById('question')
var answerButttonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
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
    question.answers.forEach(answer => {
        var button = ducument.createElement('buttom')
        button.innerText = answer.Text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButttonsElement.appendChild(button)
        
    })


}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButttonsElement.firstChild) {
        answerButttonsElement.removeChild
        (answerButttonsElement.firstChild)
    }

}

 function selectAnswer() {
    var selectButton = e.target
    var correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Arrray.from(answerButttonsElement.children).forEach(button => {
        setStatusClass(button, dataset.correct)
    })
    if (shuffledQuestions.lengthn > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')

 }  else{
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')


 }

 }
 function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }

 }
 function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
 }

 var questions = [
    {
    questions: 'what is 2 + 2',
    answers: [
        {Text: '4', correct: true },
        {Text: '22', correct: false }

    ]
}
 ]

