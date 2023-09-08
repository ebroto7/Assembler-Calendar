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
import { isValidForm, setEventInfo, closeModal } from "./form.js";
const main = document.querySelector("#main");
const createEvent_Modal = document.querySelector('#createEvent_Modal');
const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn');
modalForm_saveEventBtn.addEventListener('click', () => {
    saveNewEvent();
    console.log("save event");
    console.log(isValidForm());
    if (isValidForm() == true) {
        const newEvent = setEventInfo();
        closeModal();
        saveNewEvent(newEvent);
        console.log("new event:" + JSON.stringify(newEvent));
    }
});
function getAndParseLSinfo(key) {
    const objectsLS = localStorage.getItem(key);
    const parseInfoLS = JSON.parse(objectsLS);
    return parseInfoLS;
}
function saveNewEvent(event) {
    let savedEvents = getAndParseLSinfo('events');
    if (savedEvents !== null) {
        savedEvents.push(event);
        console.log('push: ' + savedEvents);
        localStorage.setItem("scores", JSON.stringify(savedEvents));
    }
    else {
        let newArray = [event];
        localStorage.setItem("scores", JSON.stringify(newArray));
        console.log('save: ' + savedEvents);
    }
    console.log(event);
}
