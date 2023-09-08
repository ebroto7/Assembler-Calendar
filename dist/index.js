import { printMonth, printDays, printEvents } from './Views/Calendar.js';
import { isValidForm, saveNewEvent } from "./form.js";
const event1 = {
    title: 'alex nace',
    startDate: '12-08-2023',
    endDate: '12-09-2023'
};
const event2 = {
    title: 'alex muere',
    startDate: '19-09-2023',
    endDate: '19-09-2023'
};
const event3 = {
    title: 'alex renace',
    startDate: '12-09-2023',
    endDate: '14-09-2023'
};
const events = [event1, event2, event3];
window.addEventListener('DOMContentLoaded', () => {
    printMonth();
    printDays();
    printEvents(events);
});
const main = document.querySelector("#main");
const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn');
modalForm_saveEventBtn.addEventListener('click', () => {
    saveNewEvent();
    console.log("save event");
    console.log(isValidForm());
});
