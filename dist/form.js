import { Type } from "./types/Task.js";
const types = Object.keys(Type);
const modalReminderSwitch = document.querySelector('#modalReminderSwitch');
const modalAllDayEventSwitch = document.querySelector('#modalAllDayEventSwitch');
const modalReminderOptions_container = document.querySelector('#modalReminderOptions_container');
const form_startDate_container = document.querySelector('#form_startDate_container');
const modalReminderSwitch_options = document.querySelector('#modalReminderSwitch_options');
const form_startDate_hourInput = document.querySelector('#form_startDate_hourInput');
const modalForm_EventType = document.querySelector('#modalForm_EventType');
function createTypeFormView() {
    types.forEach((type) => {
        const typeFormView = document.createElement('option');
        typeFormView.innerText = type;
        modalForm_EventType.appendChild(typeFormView);
    });
}
createTypeFormView();
const event = {
    id: 3,
    name: "chanchito",
};
modalReminderSwitch.addEventListener('change', () => {
    hiddenReminderInput();
});
modalAllDayEventSwitch.addEventListener('change', () => {
    hiddenDateInput();
});
function hiddenReminderInput() {
    if (modalReminderSwitch.checked == true) {
        modalReminderSwitch_options.disabled = false;
        modalReminderOptions_container.hidden = false;
    }
    else {
        modalReminderSwitch_options.disabled = true;
        modalReminderOptions_container.hidden = true;
    }
}
function hiddenDateInput() {
    if (modalAllDayEventSwitch.checked == true) {
        form_startDate_container.hidden = true;
        form_startDate_hourInput.hidden = true;
    }
    else {
        form_startDate_container.hidden = false;
        form_startDate_hourInput.hidden = false;
    }
}
