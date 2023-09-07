import { Type, ReminderTime } from "./types/EventCal.js";
const calendarTypes = Object.keys(Type);
const reminderTimes = Object.keys(ReminderTime);
const modalForm_eventTitle = document.querySelector('#modalForm_eventTitle');
const modalForm_AllDayEventSwitch = document.querySelector('#modalForm_AllDayEventSwitch');
const modalForm_startDate_container = document.querySelector('#form_startDate_container');
const modalForm_startDate_dateInput = document.querySelector('#form_startDate_dateInput');
const modalForm_startDate_hourInput = document.querySelector('#form_startDate_hourInput');
const modalForm_endDate_dateInput = document.querySelector('#form_endDate_dateInput');
const modalForm_endDate_hourInput = document.querySelector('#form_endDate_hourInput');
const modalForm_ReminderCheckbox = document.querySelector('#modalReminderSwitch');
const modalForm_ReminderOptions_container = document.querySelector('#modalReminderOptions_container');
const modalForm_ReminderCheckbox_options = document.querySelector('#modalReminderSwitch_options');
const modalForm_description = document.querySelector('#modalForm_description');
const modalForm_EventType = document.querySelector('#modalForm_EventType');
function createTypeFormView() {
    calendarTypes.forEach((type) => {
        const typeFormView = document.createElement('option');
        typeFormView.innerText = type;
        modalForm_EventType.appendChild(typeFormView);
    });
}
createTypeFormView();
function createReminderTimesFormView() {
    reminderTimes.forEach((e) => {
        const reminderFormView = document.createElement('option');
        reminderFormView.innerText = e;
        modalForm_ReminderCheckbox_options.appendChild(reminderFormView);
    });
}
createReminderTimesFormView();
modalForm_ReminderCheckbox.addEventListener('change', () => {
    hiddenReminderInput();
});
modalForm_AllDayEventSwitch.addEventListener('change', () => {
    hiddenDateInput();
});
function hiddenReminderInput() {
    if (modalForm_ReminderCheckbox.checked == true) {
        modalForm_ReminderCheckbox_options.disabled = false;
        modalForm_ReminderOptions_container.hidden = false;
    }
    else {
        modalForm_ReminderCheckbox_options.disabled = true;
        modalForm_ReminderOptions_container.hidden = true;
    }
}
function hiddenDateInput() {
    if (modalForm_AllDayEventSwitch.checked == true) {
        modalForm_startDate_container.hidden = true;
        modalForm_startDate_hourInput.hidden = true;
    }
    else {
        modalForm_startDate_container.hidden = false;
        modalForm_startDate_hourInput.hidden = false;
    }
}
let eventsList = [];
export function isValidForm() {
    let isValid = true;
    const title = modalForm_eventTitle.value;
    const isAllDay = modalForm_AllDayEventSwitch.checked;
    const startDate = modalForm_startDate_dateInput.value;
    const startHour = modalForm_startDate_hourInput.value;
    const endDate = modalForm_endDate_dateInput.value;
    const endHour = modalForm_endDate_hourInput.value;
    const reminder = modalForm_ReminderCheckbox.checked;
    const startReminder = modalForm_ReminderCheckbox_options.value;
    const decription = modalForm_description.value;
    const calendar = modalForm_EventType.value;
    if (title.trim().length < 3) {
        setErrorMessage("formTitleError", "Please enter a valid title");
        isValid = false;
    }
    else {
        deleteErrorMessage("formTitleError");
    }
    if (calendar == "Choose...") {
        isValid = false;
        setErrorMessage("modalForm_calendarError", "Plese select a calendar");
    }
    else {
        deleteErrorMessage("modalForm_calendarError");
    }
    return isValid;
}
function setErrorMessage(containerID, message) {
    const container = document.getElementById(`${containerID}`);
    container.hidden = false;
    container.innerText = message;
}
function deleteErrorMessage(containerID) {
    const container = document.getElementById(`${containerID}`);
    container.hidden = true;
}
export function saveNewEvent() {
    let newEvent = {
        title: modalForm_eventTitle.value,
        isAllDay: modalForm_AllDayEventSwitch.checked,
        startDate: modalForm_startDate_dateInput.value,
        startHour: modalForm_startDate_hourInput.value,
        endDate: modalForm_endDate_dateInput.value,
        endHour: modalForm_endDate_hourInput.value,
        reminder: modalForm_ReminderCheckbox.checked,
        startReminder: modalForm_ReminderCheckbox_options.value,
        decription: modalForm_description.value,
        calendar: modalForm_EventType.value
    };
    console.log(newEvent);
    console.log(newEvent.startDate, newEvent.startHour);
}
