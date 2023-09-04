import { getDate, getDay, getMonth, getYear, getToday, printMonth } from './Views/Calendar.js';
window.addEventListener('DOMContentLoaded', printMonth);
console.log(getDate(12));
console.log(getToday());
console.log(getMonth());
console.log(getYear());
console.log(getDay());
