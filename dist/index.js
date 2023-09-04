"use strict";
function getDate(dateKey) {
    const yearOffset = (dateKey - 32) % 512;
    const year = (dateKey - 32 - yearOffset) / 512;
    const day = yearOffset % 32;
    const month = (yearOffset - day) / 32;
    return new Date(year + 1970, month, day);
}
function getToday() {
    const date = new Date;
    return date;
}
function getMonth() {
    const date = new Date;
    const month = date.getMonth() + 1;
}
function getYear() {
    const date = new Date;
    return date.getFullYear();
}
function getDay() {
    const day = getToday().getDate();
    return day;
}
const calendarTitle = document.querySelector('#calendarTitle');
const calendarDay = document.createElement('div');
calendarDay.textContent = `${getDay().toString()} of ${getMonth()}`;
calendarTitle === null || calendarTitle === void 0 ? void 0 : calendarTitle.appendChild(calendarDay);
console.log(getToday());
console.log(getMonth());
console.log(getYear());
console.log(getDay());
