const clockElement = document.getElementById("clock");
const monthYearElement = document.getElementById("monthYear");
const daysContainer = document.querySelector(".days");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let currentDate = new Date();

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours} : ${minutes} : ${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

function renderCalendar() {
    daysContainer.innerHTML = "";
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const monthNames = ["Ýanwar", "Fewral", "Mart", "Aprel", "Maý", "Iýun", "Iýul", "Awgust", "Sentýabr", "Oktýabr", "Noýabr", "Dekabr"];
    monthYearElement.textContent = `${monthNames[month]}, ${year}`;

    const firstDayOfMonth = new Date(year, month, 1).getDay(); 
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate(); 
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate(); 

    let blanks = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; 

    for (let i = blanks; i > 0; i--) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day", "inactive");
        dayElement.textContent = lastDayOfPrevMonth - i + 1;
        daysContainer.appendChild(dayElement);
    }

    for (let day = 1; day <= lastDateOfMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;

        const today = new Date();
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayElement.classList.add("current");
        }

        daysContainer.appendChild(dayElement);
    }
}

prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();