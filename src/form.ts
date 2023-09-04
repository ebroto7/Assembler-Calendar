import { Task, Type } from "./types/Task.js";

const types = Object.keys(Type)


const modalReminderSwitch = document.querySelector('#modalReminderSwitch') as HTMLInputElement
const modalAllDayEventSwitch = document.querySelector('#modalAllDayEventSwitch') as HTMLInputElement
const modalReminderOptions_container = document.querySelector('#modalReminderOptions_container') as HTMLDivElement
const form_startDate_container = document.querySelector('#form_startDate_container') as HTMLDivElement

const modalReminderSwitch_options = document.querySelector('#modalReminderSwitch_options') as HTMLInputElement
const form_startDate_hourInput = document.querySelector('#form_startDate_hourInput') as HTMLInputElement

const modalForm_EventType = document.querySelector('#modalForm_EventType') as HTMLSelectElement
function createTypeFormView() {

     types.forEach((type) => {
        const typeFormView = document.createElement('option') as HTMLOptionElement
        typeFormView.innerText = type
        // typeFormView.innerText = "hello"
        modalForm_EventType.appendChild(typeFormView)
     });
 
}
createTypeFormView()



const event: Task = {
    id: 3,
    name: "chanchito",
}

modalReminderSwitch.addEventListener('change', ()=> {
    hiddenReminderInput()
})
modalAllDayEventSwitch.addEventListener('change', ()=> {
    hiddenDateInput()
})

function hiddenReminderInput() {
    if (modalReminderSwitch.checked == true) {
        modalReminderSwitch_options.disabled = false
        modalReminderOptions_container.hidden = false
    } else {
        modalReminderSwitch_options.disabled = true
        modalReminderOptions_container.hidden = true
    }
}

function hiddenDateInput() {
    if (modalAllDayEventSwitch.checked == true) {
        form_startDate_container.hidden = true
        form_startDate_hourInput.hidden = true
    } else {
        form_startDate_container.hidden = false
        form_startDate_hourInput.hidden = false
    }
}
