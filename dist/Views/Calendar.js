const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function getDate(dateKey) {
    const yearOffset = (dateKey - 32) % 512;
    const year = (dateKey - 32 - yearOffset) / 512;
    const day = yearOffset % 32;
    const month = (yearOffset - day) / 32;
    return new Date(year + 1970, month, day);
}
function getDateDay(date) {
    return date.toString().slice(0, 3);
}
function getDateMonth(date) {
    return date.toString().slice(4, 7);
}
function getDateNumDay(date) {
    return date.toString().slice(8, 10);
}
function getDateYear(date) {
    return date.toString().slice(11, 15);
}
function createDateID(x) {
    return getDateMonth(getDate(x)) + getDateNumDay(getDate(x)) + getDateYear(getDate(x));
}
function getToday() {
    const date = new Date;
    return date;
}
function getTodayDay() {
    const day = getToday().getDate();
    return day;
}
function getTodayMonth() {
    const date = new Date;
    return date.getMonth();
}
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(9, 2023));
function getTodayYear() {
    const date = new Date;
    return date.getFullYear();
}
let M = getTodayMonth();
let Y = getTodayYear();
export function printMonth() {
    const calendarTitle = document.querySelector('#calendarTitle');
    calendarTitle.textContent = `${Month[M]} of ${Y}`;
}
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
buttonRight === null || buttonRight === void 0 ? void 0 : buttonRight.addEventListener('click', () => {
    M++;
    if (M == 12) {
        M = 0;
        Y++;
    }
    printMonth();
    printDays();
});
buttonLeft === null || buttonLeft === void 0 ? void 0 : buttonLeft.addEventListener('click', () => {
    M--;
    if (M == (-1)) {
        M = 11;
        Y--;
    }
    printMonth();
    printDays();
});
export function printDays() {
    const row = document.querySelector('#days');
    row === null || row === void 0 ? void 0 : row.replaceChildren();
    for (let i = 1; i <= daysInMonth(M + 1, Y); i++) {
        const day = document.createElement('div');
        day.setAttribute("class", "col");
        day.innerText = `${i}`;
        row === null || row === void 0 ? void 0 : row.appendChild(day);
    }
}
console.log(getDate(123456));
console.log(getTodayDay());
console.log(getTodayMonth());
console.log(getTodayYear());
