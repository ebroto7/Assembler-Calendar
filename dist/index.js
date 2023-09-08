import { printMonth, printDays } from './Views/Calendar.js';
import { isValidForm, setEventInfo, closeModal } from "./form.js";
window.addEventListener('DOMContentLoaded', () => {
    printMonth();
    printDays();
});
const main = document.querySelector("#main");
const createEvent_Modal = document.querySelector('#createEvent_Modal');
const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn');
modalForm_saveEventBtn.addEventListener('click', () => {
    if (isValidForm() == true) {
        const newEvent = setEventInfo();
        closeModal();
        saveNewEvent(newEvent);
        location.reload();
        console.log("new event:" + JSON.stringify(newEvent));
    }
});
export function getAndParseLSinfo(key) {
    const objectsLS = localStorage.getItem(key);
    const parseInfoLS = JSON.parse(objectsLS);
    return parseInfoLS;
}
function saveNewEvent(event) {
    let savedEvents = getAndParseLSinfo('events');
    if (savedEvents !== null) {
        savedEvents.push(event);
        console.log('push: ' + savedEvents);
        localStorage.setItem("events", JSON.stringify(savedEvents));
    }
    else {
        let newArray = [event];
        localStorage.setItem("events", JSON.stringify(newArray));
        console.log('save: ' + savedEvents);
    }
    console.log(event);
}
