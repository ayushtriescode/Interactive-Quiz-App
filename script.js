const quizData = [
  {
    question: "Which Indian state has the longest coastline?",
    options: {
      a: "Maharashtra",
      b: "Gujarat",
      c: "Tamil Nadu",
      d: "Andhra Pradesh",
    },
    correct: "b",
  },

  {
    question: "The headquarters of the IMF is located in:",
    options: {
    a: "New York",
    b: "Geneva",
    c: "Washington, D.C.",
    d: "London"},
    correct: "c",
  },

  {
    question: "Who was the first Indian to win a Nobel Prize?",
    options:{
    a: "C. V. Raman",
    b: "Rabindranath Tagore",
    c: "Mother Teresa",
    d: "Amartya Sen"},
    correct: "b",
  },

  {
    question: "Which river is known as the “Sorrow of Bihar”?",
    options:{
    a: "Ganga",
    b: "Kosi",
    c: "Yamuna",
    d: "Brahmaputra"},
    correct: "b",
  },

  {
    question: "The term “Green Revolution” is associated with:",
    options: {
    a: "Industrial growth",
    b: "Agricultural production",
    c: "Environmental protection",
    d: "Digital technology"},
    correct: "b",
  },

  {
    question: "Which country is known as the “Land of Rising Sun”?",
    options:{
    a: "China",
    b: "South Korea",
    c: "Japan",
    d: "Thailand"},
    correct: "c",
  },

  {
    question: "The Battle of Plassey was fought in:",
    options:{
    a: "1757",
    b: "1764",
    c: "1857",
    d: "1773"},
    correct: "a",
  },

  {
    question: "Who is known as the “Iron Man of India”?",
    options:{
    a: "Subhas Chandra Bose",
    b: "Bhagat Singh",
    c: "Sardar Vallabhbhai Patel",
    d: "Lal Bahadur Shastri"},
    correct: "c",
  },

  {
    question: "Which is the largest desert in the world?",
    options:{
    a: "Sahara",
    b: "Gobi",
    c: "Arctic",
    d: "Antarctic"},
    correct: "d",
  },

  {
    question: "The currency of South Korea is:",
    options:{
    a: "Yen",
    b: "Won",
    c: "Dollar",
    d: "Peso"},
    correct: "b",
  },
];

const question = document.getElementById("question-text");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");

let currentQuestionIndex = 0;
let score = 0;
loadData();

function loadData() {
  const currentData = quizData[currentQuestionIndex];
  question.innerText = currentData.question;

  const buttons = [a,b,c,d]
  buttons.forEach((btn) =>{
    btn.style.backgroundColor = "";
  });

  a.innerText = currentData.options.a;
  b.innerText = currentData.options.b;
  c.innerText = currentData.options.c;
  d.innerText = currentData.options.d;
}

function nextData() {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    loadData();
  } else {
    const quizBox = document.querySelector(".quiz-container");
    quizBox.innerHTML = `
      <div class="done" style="text-align: center; padding: 40px;">
        <h2 style="margin-bottom: 20px;">Quiz Finished! 🏁</h2>
        <p style="font-size: 1.5rem;">You scored <strong>${score}</strong> out of ${quizData.length}</p>
        <button onclick="location.reload()" style="margin-top: 30px; width: auto; padding: 10px 30px;">Try Again</button>
      </div>
    `;
    document.querySelector(".navigate").style.display = "none";
  }
}

function prevData() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadData();
  }
}

function checkAnswer(answer, btn) {
  const correctAnswer = quizData[currentQuestionIndex].correct;

  if (answer === correctAnswer) {
    score++;
    btn.style.backgroundColor = "#53AC53";
  } else {
    btn.style.backgroundColor = "#FF6961";
  }
  const allButtons = document.querySelectorAll('.option');
  allButtons.forEach(b => b.style.pointerEvents = "none");

  setTimeout(() => {
    if (currentQuestionIndex < quizData.length - 1) {
        nextData();

        allButtons.forEach(b => b.style.pointerEvents = "auto");
    } else {
        nextData();
    }
  },1500);
}

