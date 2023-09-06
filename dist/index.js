import { printMonth, printDays } from './Views/Calendar.js';
import { isValidForm, saveNewEvent } from "./form.js";
window.addEventListener('DOMContentLoaded', () => {
    printMonth();
    printDays();
});
const main = document.querySelector("#main");
const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn');
modalForm_saveEventBtn.addEventListener('click', () => {
    saveNewEvent();
    console.log("save event");
    console.log(isValidForm());
});
