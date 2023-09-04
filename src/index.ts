 import { getDate, getDay, getMonth, getYear, getToday } from './Views/Calendar.js';

const calendarTitle = document.querySelector('#calendarTitle');
const calendarDay = document.createElement('div');
calendarDay.textContent = `${getDay().toString()} of ${getMonth()}`;
calendarTitle?.appendChild(calendarDay);


console.log(getDate(123456));
console.log(getToday());
console.log(getMonth());
console.log(getYear());
console.log(getDay());





