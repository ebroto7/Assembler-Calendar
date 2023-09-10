import { printMonth, printDays } from './Views/Calendar.js';
import { isValidForm, setEventInfo, closeModal } from "./form.js";
window.addEventListener('DOMContentLoaded', () => {
    printMonth();
    printDays("days");
    printDays("days2");
});
const main = document.querySelector("#main");
const createEvent_Modal = document.querySelector('#createEvent_Modal');
const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn');
const modalForm_deleteEventBtn = document.querySelector('#modalForm_deleteEventBtn');
modalForm_saveEventBtn.addEventListener('click', () => {
    if (isValidForm() == true) {
        const newEvent = setEventInfo();
        closeModal();
        saveNewEvent(newEvent);
        location.reload();
        console.log("new event:" + JSON.stringify(newEvent));
    }
});
modalForm_deleteEventBtn.addEventListener('click', () => {
    deleteEvent(modalForm_deleteEventBtn.id);
    closeModal();
    location.reload();
    console.log("delete: " + modalForm_deleteEventBtn.id);
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
function deleteEvent(id) {
    let savedEvents = getAndParseLSinfo('events');
    console.log("old: " + savedEvents);
    savedEvents.forEach(element => {
        console.log(element.id);
        if (element.id == id) {
            let i = savedEvents.indexOf(element);
            const removed = savedEvents.splice(i, 1);
            console.log("new: " + savedEvents);
            console.log("index: " + i);
            console.log("element: " + element);
            localStorage.setItem("events", JSON.stringify(savedEvents));
            console.log("new array: " + removed);
        }
    });
}
