import { printMonth, printDays } from './Views/Calendar.js';
import { isValidForm, setEventInfo, closeModal, calendarTypes } from "./form.js";
window.addEventListener('DOMContentLoaded', () => {
    printMonth();
    printDays("days");
    printDays("days2");
    createCheckboxCalendar();
    nextEvents();
});
const main = document.querySelector("#main");
const createEvent_Modal = document.querySelector('#createEvent_Modal');
const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn');
const modalForm_deleteEventBtn = document.querySelector('#modalForm_deleteEventBtn');
const modalForm_editEventBtn = document.querySelector('#modalForm_editEventBtn');
modalForm_saveEventBtn.addEventListener('click', () => {
    if (isValidForm() == true) {
        const newEvent = setEventInfo();
        closeModal();
        saveNewEvent(newEvent);
        location.reload();
    }
});
modalForm_deleteEventBtn.addEventListener('click', () => {
    const edited = setEventInfo();
    deleteEvent(edited.id);
    closeModal();
    location.reload();
});
modalForm_editEventBtn.addEventListener('click', () => {
    if (isValidForm() == true) {
        const edited = setEventInfo();
        closeModal();
        editEvent(edited);
        location.reload();
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
function deleteEvent(id) {
    let savedEvents = getAndParseLSinfo('events');
    savedEvents.forEach(element => {
        if (element.id == id) {
            let i = savedEvents.indexOf(element);
            const removed = savedEvents.splice(i, 1);
            localStorage.setItem("events", JSON.stringify(savedEvents));
        }
    });
}
function editEvent(event) {
    let savedEvents = getAndParseLSinfo('events');
    savedEvents.forEach(element => {
        if (element.id == event.id) {
            let i = savedEvents.indexOf(element);
            const removed = savedEvents.splice(i, 1, event);
            localStorage.setItem("events", JSON.stringify(savedEvents));
        }
    });
}
const asideBar = document.querySelector("#aside");
const checkboxCalendar = document.createElement("div");
function createCheckboxCalendar() {
    console.log("function createCheckboxCalendar");
    asideBar.appendChild(checkboxCalendar);
    const titleNE = document.createElement("h5");
    titleNE.setAttribute("id", "titleNE");
    titleNE.classList.add('miniTitle');
    titleNE.innerHTML = "calendars:";
    asideBar.appendChild(titleNE);
    titleNE.style.backgroundColor = "rgba(6, 46, 0, 0.691)";
    const checkbox_container = document.createElement("div");
    checkbox_container.classList.add("checkbox_container");
    checkbox_container.appendChild(titleNE);
    checkboxCalendar.appendChild(checkbox_container);
    calendarTypes.forEach((element) => {
        const inputTitle_container = document.createElement("div");
        inputTitle_container.classList.add("inputTitle_container");
        const createInput = document.createElement("input");
        createInput.setAttribute("class", "form-check-input");
        createInput.setAttribute("type", "checkbox");
        createInput.setAttribute("value", "");
        createInput.setAttribute("id", "flexCheckDefault");
        const createLabel = document.createElement("label");
        createLabel.setAttribute("class", "form-check-label");
        createLabel.setAttribute("name", "my calendars");
        createLabel.setAttribute("for", "flexCheckDefault");
        createLabel.innerText = element;
        inputTitle_container.appendChild(createInput);
        inputTitle_container.appendChild(createLabel);
        checkbox_container.appendChild(inputTitle_container);
        createInput.addEventListener("change", () => {
            if (createInput.checked == true) {
                createLabel.style.backgroundColor = "grey";
                console.log("marked");
            }
            else {
                createLabel.style.backgroundColor = "transparent";
            }
        });
    });
}
function nextEvents() {
    const titleNE = document.createElement("h5");
    titleNE.classList.add('miniTitle');
    titleNE.setAttribute("id", "titleNE");
    titleNE.innerHTML = " Next Events:";
    asideBar.appendChild(titleNE);
    titleNE.style.backgroundColor = "rgba(6, 46, 0, 0.691)";
    const createEvent = ["comida familiar", "excursion amigos"];
    const listEvent = document.createElement("ul");
    asideBar === null || asideBar === void 0 ? void 0 : asideBar.appendChild(listEvent);
    createEvent.forEach((element) => {
        const singleEvent = document.createElement("li");
        singleEvent.classList.add('list-group', "card");
        singleEvent.textContent = `${element}`;
        listEvent === null || listEvent === void 0 ? void 0 : listEvent.appendChild(singleEvent);
    });
}
