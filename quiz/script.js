const quizData=[
    {
        quiz : 'How to create tensor from python list a = [[1,2,3],[4,5,6]] on pyTorch? ',
        a : "torch(a)",
        b : "torch.tensor(a)",
        c: 'a.tensor()',
        d: 'a.torch.tensor()',
        correct: 'b',
    },
    {
        quiz : "Q1.Numpy : Create an array of shape (3, 2) and populate it with random samples from a uniform distribution over [0, 1).",
        a : "array.randome(3,2)",
        b : "np.array(3,2)",
        c : "np.array.rand(3,4)",
        d: "np.array(rand(3,4))",
        correct : 'c'
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
const quizContainer =   document.querySelector('.quiz-container')
const quiz = document.getElementById('quiz-text')
const a = document.getElementById('answer_a')
const b = document.getElementById('answer_b')
const c = document.getElementById('answer_c')
const d = document.getElementById('answer_d')
const btn = document.getElementById('btnSubmit');
let quizIndex = 0;
let currentQuiz = {};
let score = 0;
loadQuiz()
function loadQuiz(){
    currentQuiz = quizData[quizIndex];
    quiz.innerText=currentQuiz.quiz;
    a.innerText=currentQuiz.a;
    b.innerText=currentQuiz.b;
    c.innerText=currentQuiz.c;
    d.innerText=currentQuiz.d;
}
function getSelectedAnswer(){
    const answerEl =   document.querySelectorAll('.answer');
    let submittedAnswer;
    answerEl.forEach(el =>{
        if (el.checked) {
            submittedAnswer = el.id;
        }
    })
    return submittedAnswer;
}
const onSubmitQuiz = (()=>{
    let selectedAnswer = getSelectedAnswer();
    if(selectedAnswer === currentQuiz.correct){
        score++;
    }
    if(quizIndex < quizData.length-1)
        loadQuiz(quizIndex++);
    else{
        quizContainer.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        
        <button onclick="location.reload()">Reload</button>
    `;
    }
})
btn.addEventListener('click', onSubmitQuiz);