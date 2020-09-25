const quizData=[
    {
        quiz : 'How old is Florin?',
        a : "10",
        b : "17",
        c: '26',
        d: '110',
        correct: 'c',
    },
    {
        quiz : "inside which HTML element do we put the Javascript",
        a : "<scripting>",
        b:"<script>",
        c:"<javascript>",
        d:"<js>",
        correct : 'b'
    },
    {
        quiz : "who is the president of US",
        a : "Joohee",
        b:"park",
        c:"Dong",
        d:"Donald Trumph",        
        correct : 'd'
    },
]
const quiz = document.getElementById('quiz-text')
console.log('quiz', quiz);
const a = document.getElementById('answer_a')
const b = document.getElementById('answer_b')
const c = document.getElementById('answer_c')
const d = document.getElementById('answer_d')

let quizIndex = 0;
loadQuiz()
function loadQuiz(){
    let currentQuiz = quizData[quizIndex];
    console.log('currentQuiz', currentQuiz.quiz);
    quiz.innerText=currentQuiz.quiz;
    a.innerText=currentQuiz.a;
    b.innerText=currentQuiz.b;
    c.innerText=currentQuiz.c;
    d.innerText=currentQuiz.d;
}a