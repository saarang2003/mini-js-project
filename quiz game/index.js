const questions = [{
  question: "What is the most fundamental unit of data storage in a computer?",
  choices: ["Byte", "Bit", "Word", "Megabyte"],
  correctAnswer: "Bit"
},
{
  question: "Which programming language is known for its use in web development?",
  choices: ["Java", "Python", "JavaScript", "C++"],
  correctAnswer: "JavaScript"
},
{
  question: "What is the process of converting code written in a high-level language into machine code?",
  choices: ["Compilation", "Interpretation", "Debugging", "Execution"],
  correctAnswer: "Compilation"
},
{
  question: "Which of the following is a type of algorithm that sorts data by repeatedly comparing adjacent elements?",
  choices: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"],
  correctAnswer: "Bubble Sort"
},
{
  question: "What is the primary function of an operating system?",
  choices: ["Managing hardware resources", "Running applications", "Storing data", "Connecting to the internet"],
  correctAnswer: "Managing hardware resources"
}
];


let currentQuestion = 0;
let score = 0;


function renderQuestion() {
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

questionElement.textContent = questions[currentQuestion].question;
optionsElement.innerHTML = '';

questions[currentQuestion].choices.forEach((choice) => {
  const button = document.createElement("button");
  button.textContent = choice;
  button.addEventListener("click", () => checkAnswer(choice));
  optionsElement.appendChild(button);
});
}

function checkAnswer(selectedChoice) {
if (selectedChoice === questions[currentQuestion].correctAnswer) {
  score++;
  document.getElementById('score-value').textContent = score;
}
currentQuestion++;
if (currentQuestion < questions.length) {
  renderQuestion();
} else {
  alert('Quiz ends. Your score: ' + score);
}
}

document.getElementById('next').addEventListener('click', () => {
if (currentQuestion < questions.length) {
  renderQuestion();
} else {
  alert('Quiz ends. Your score: ' + score);
}
});

// Initial render
renderQuestion();
