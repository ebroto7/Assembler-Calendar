import { getDay, getMonth, getYear, getToday, printMonth } from './Views/Calendar.js';
window.addEventListener('DOMContentLoaded', printMonth);
console.log(getToday());
console.log(getMonth());
console.log(getYear());
console.log(getDay());
const event = new Date().toString().slice(0, 3);
console.log(event);
