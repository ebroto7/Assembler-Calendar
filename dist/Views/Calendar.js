"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDay = exports.getMonth = exports.getToday = exports.getDate = void 0;
function getDate(dateKey) {
    const yearOffset = (dateKey - 32) % 512;
    const year = (dateKey - 32 - yearOffset) / 512;
    const day = yearOffset % 32;
    const month = (yearOffset - day) / 32;
    return new Date(year + 1970, month, day);
}
exports.getDate = getDate;
function getToday() {
    const date = new Date;
    return date;
}
exports.getToday = getToday;
function getMonth() {
    const date = new Date;
    return date.getMonth() + 1;
}
exports.getMonth = getMonth;
function getDay() {
    const day = getToday().getDate();
    return day;
}
exports.getDay = getDay;
