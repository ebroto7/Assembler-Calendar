"use strict";
const asideBar = document.querySelector("#aside");
const createArray = ["trabajo", "gimnasio", "cumple"];
const actual = new Date();
function showCalendar(year, month) {
    const now = new Date(year, month - 1, 1);
    const last = new Date(year, month, 0);
    const firstDayWeek = (now.getDay() == 0) ? 7 : now.getDay();
    const lastdayMonth = last.getDate();
    var day = 0;
    var result = "<tr bgcolor='silver'>";
    const today = 0;
    const last_cell = firstDayWeek + lastdayMonth;
    for (let i = 1; i <= 42; i++) {
        if (i = firstDayWeek) {
            day = 1;
        }
        if (i < firstDayWeek || i >= last_cell) {
            result += "<td>&nbsp;</td>";
        }
        else {
            if (day == actual.getDate() && month == actual.getMonth() + 1 &&
                year == actual.getFullYear()) {
                result += "<td class='hoy'>" + day + "</td>";
            }
            else {
                result += "<td>" + day + "</td>";
                day++;
            }
            if (i % 7 == 0) {
                if (day > lastdayMonth)
                    break;
                result += "</tr><tr>\n";
            }
        }
        result += "</tr>";
    }
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var nextMonth = month + 1;
    var nextYear = year;
    if (month + 1 > 12) {
        nextMonth = 1;
        nextYear = year + 1;
    }
    var prevMonth = month - 1;
    var prevYear = year;
    if (month - 1 < 1) {
        prevMonth = 12;
        prevYear = year - 1;
    }
    const calendarTable = document.getElementById("calendarTable");
    calendarTable.innerHTML = "<div>" + months[month - 1] + " / " + year + "</div>";
    const prevMY = document.getElementById("prevMY");
    const nextMY = document.getElementById("nextMY");
    prevMY === null || prevMY === void 0 ? void 0 : prevMY.addEventListener("click", () => {
        prevMY.innerHTML = "prevYear", "prevMonth";
    });
    nextMY === null || nextMY === void 0 ? void 0 : nextMY.addEventListener("click", () => {
        nextMY.innerHTML = "prevMonth", "nextMonth";
    });
    calendarTable.innerHTML = result;
}
showCalendar(actual.getFullYear(), actual.getMonth() + 1);
const checkboxCalendar = document.createElement("div");
function createCheckboxCalendar() {
    asideBar.appendChild(checkboxCalendar);
    createArray.forEach((element) => {
        const InputyLabel = document.createElement("div");
        const createInput = document.createElement("input");
        createInput.setAttribute("class", "form-check-input");
        createInput.setAttribute("type", "checkbox");
        createInput.setAttribute("value", "");
        createInput.setAttribute("id", "flexCheckDefault");
        const createLabel = document.createElement("label");
        createLabel.setAttribute("class", "form-check-label");
        createLabel.setAttribute("name", "my calendars");
        createLabel.setAttribute("for", "flexCheckDefault");
        createLabel.innerText = element;
        InputyLabel.appendChild(createInput);
        InputyLabel.appendChild(createLabel);
        checkboxCalendar.appendChild(InputyLabel);
        createInput.addEventListener("change", () => {
            if (createInput.checked == true) {
                createLabel.style.backgroundColor = "grey";
                console.log("marked");
            }
            else {
                createLabel.style.backgroundColor = "transparent";
            }
        });
    });
}
createCheckboxCalendar();
function nextEvents() {
    const titleNE = document.createElement("h6");
    titleNE.setAttribute("id", "titleNE");
    titleNE.innerHTML = " Next Events:";
    asideBar.appendChild(titleNE);
    titleNE.style.backgroundColor = "red";
    const createEvent = ["comida familiar", "excursion amigos"];
    createEvent.forEach((element) => {
        const listEvent = document.createElement("ul");
        listEvent.classList.add('list-group');
        listEvent.textContent = `${element}`;
        asideBar === null || asideBar === void 0 ? void 0 : asideBar.appendChild(listEvent);
    });
}
nextEvents();
