 import { getDate, getDay, getMonth, getYear, getToday } from './Views/Calendar.js';

const calendarTitle = document.querySelector('#calendarTitle');
const calendarDay = document.createElement('div');
calendarDay.textContent = `${getMonth()} of ${getYear()}`;
calendarTitle?.appendChild(calendarDay);

console.log(getDate(12));
console.log(getToday());
console.log(getMonth());
console.log(getYear());
console.log(getDay());





