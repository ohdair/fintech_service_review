let currentQuestionIndex = 0;
let score = 0;
let answersSelected = [];
let selectedDateQuestions = [];

const questionNumberElement = document.getElementById("question-number");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const wrongAnswersElement = document.getElementById("wrong-answers");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  answersSelected = [];
  calendarContainer.classList.add("hide");
  scoreContainer.classList.add("hide");
  quizContainer.classList.remove("hide");

  selectedDateQuestions = shuffleArray(selectedDateQuestions).map(
    (question) => {
      question.answers = shuffleArray(question.answers);
      return question;
    }
  );

  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(selectedDateQuestions[currentQuestionIndex]);
  questionNumberElement.innerText = `문제 ${currentQuestionIndex + 1} / ${
    selectedDateQuestions.length
  }`;
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", () => selectAnswer(button, answer));
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(selectedButton, answer) {
  const correct = answer.correct;
  answersSelected[currentQuestionIndex] = {
    question: selectedDateQuestions[currentQuestionIndex].question,
    selected: selectedButton.innerText,
    correct: correct,
    correctAnswer: selectedDateQuestions[currentQuestionIndex].answers.find(
      (a) => a.correct
    ).text,
  };
  if (correct) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedDateQuestions.length) {
    setNextQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  questionContainer.classList.add("hide");
  scoreContainer.classList.remove("hide");

  const scorePercentage = (score / selectedDateQuestions.length) * 100;
  const roundedScore = Math.round(scorePercentage);
  let scoreClass = "";
  if (scorePercentage <= 30) {
    scoreClass = "low-score";
  } else if (scorePercentage <= 60) {
    scoreClass = "mid-score";
  } else {
    scoreClass = "high-score";
  }
  scoreElement.className = scoreClass;
  scoreElement.innerText = `점수 ${roundedScore} 점`;

  wrongAnswersElement.innerHTML = "";
  answersSelected.forEach((answer, index) => {
    if (!answer.correct) {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result");
      resultItem.innerHTML = `
              <p><strong>문제 ${index + 1}:</strong> ${answer.question}</p>
              <strong style="color: grey">선택: <span style="color: rgb(128, 64, 64);">${answer.selected
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")}</span></strong>
                <br />
              <strong>정답: <span style= "color: green">${answer.correctAnswer
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")}
                </span>
                </strong>
                <hr>
          `;
      wrongAnswersElement.appendChild(resultItem);
    }
  });

  const existingBackButton = document.getElementById("back-to-calendar");
  if (existingBackButton) {
    existingBackButton.remove();
  }

  const backButton = document.createElement("button");
  backButton.id = "back-to-calendar";
  backButton.innerText = "Back to Calendar";
  backButton.addEventListener("click", () => {
    scoreContainer.classList.add("hide");
    calendarContainer.classList.remove("hide");
    resetQuiz();
  });
  scoreContainer.appendChild(backButton);
}

function resetQuiz() {
  quizContainer.classList.add("hide");
  scoreContainer.classList.add("hide");
  calendarContainer.classList.remove("hide");
  questionContainer.classList.remove("hide");
  questionNumberElement.innerText = "";
  questionElement.innerText = "";
  resetState();
}
