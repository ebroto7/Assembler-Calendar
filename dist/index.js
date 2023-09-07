import { printMonth, printDays, printEvents } from './Views/Calendar.js';
import { isValidForm, saveNewEvent } from "./form.js";
const event1 = {
    title: 'alex nace',
};
const event2 = {
    title: 'alex muere',
};
const event3 = {
    title: 'alex renace',
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
