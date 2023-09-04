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
    return date.getMonth() + 1;
}
function getDay() {
    const day = getToday().getDate();
    return day;
}
console.log(getToday());
console.log(getMonth());
console.log(getDay());
console.log(Date.now());
console.log(getDate(Date.now()));
