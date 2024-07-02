const calendarElement = document.getElementById("calendar");
const quizContainer = document.getElementById("quiz-container");
const calendarContainer = document.getElementById("calendar-container");
const currentMonthElement = document.getElementById("current-month");
const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");

const availableDates = Object.keys(questions);

let currentMonth = new Date();

function createCalendar() {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  calendarElement.innerHTML = "";
  currentMonthElement.innerText = currentMonth.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
  });

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  daysOfWeek.forEach((day) => {
    const dayHeader = document.createElement("div");
    dayHeader.classList.add("calendar-day", "header");
    dayHeader.innerText = day;
    calendarElement.appendChild(dayHeader);
  });

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("calendar-day", "disabled");
    calendarElement.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(Date.UTC(year, month, day));
    const dateString = date.toISOString().split("T")[0];

    const dayElement = document.createElement("div");
    dayElement.classList.add("calendar-day");
    dayElement.innerText = day;

    if (!availableDates.includes(dateString)) {
      dayElement.classList.add("disabled");
    } else {
      dayElement.classList.add("enabled");
      dayElement.addEventListener("click", () => loadQuiz(dateString));
    }

    calendarElement.appendChild(dayElement);
  }
}

prevMonthButton.addEventListener("click", () => {
  currentMonth.setMonth(currentMonth.getMonth() - 1);
  createCalendar();
});

nextMonthButton.addEventListener("click", () => {
  currentMonth.setMonth(currentMonth.getMonth() + 1);
  createCalendar();
});

function loadQuiz(date) {
  if (questions[date]) {
    selectedDateQuestions = questions[date];
    startQuiz();
  }
}

createCalendar();
