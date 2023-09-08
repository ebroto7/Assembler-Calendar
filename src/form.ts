// save at localStorage
// compare start and end dates 
// hidden error messages at init modal
// array allDays for compare id's w/ calendar

import { EventCal, Type, ReminderTime } from "./types/EventCal.js";
const calendarTypes = Object.keys(Type)
const reminderTimes = Object.keys(ReminderTime)


const openAddEventModal_btn = document.querySelector("#openAddEventModal_btn") as HTMLButtonElement;
const createEvent_Modal = document.querySelector("#createEvent_Modal") as HTMLDivElement;
const modalForm_bodyContainer = document.querySelector("#modalForm_bodyContainer") as HTMLDivElement;
const formModal = document.querySelector("#formModal") as HTMLFormElement;

const modalForm_eventTitle = document.querySelector('#modalForm_eventTitle') as HTMLInputElement
const modalForm_AllDayEventSwitch = document.querySelector('#modalForm_AllDayEventSwitch') as HTMLInputElement
const modalForm_startDate_container = document.querySelector('#form_startDate_container') as HTMLDivElement
const modalForm_startDate_dateInput = document.querySelector('#form_startDate_dateInput') as HTMLDataElement
const modalForm_startDate_hourInput = document.querySelector('#form_startDate_hourInput') as HTMLDataElement
const modalForm_endDate_dateInput = document.querySelector('#form_endDate_dateInput') as HTMLDataElement
const modalForm_endDate_hourInput = document.querySelector('#form_endDate_hourInput') as HTMLDataElement
const modalForm_ReminderCheckbox = document.querySelector('#modalReminderSwitch') as HTMLInputElement
const modalForm_ReminderOptions_container = document.querySelector('#modalReminderOptions_container') as HTMLDivElement
const modalForm_ReminderCheckbox_options = document.querySelector('#modalReminderSwitch_options') as HTMLSelectElement
const modalForm_description = document.querySelector('#modalForm_description') as HTMLTextAreaElement
const modalForm_EventType = document.querySelector('#modalForm_EventType') as HTMLSelectElement

let eventsList: EventCal[] = []
const testDate: string = '2023-09-07'

const testEvent: EventCal = {
    title: "testing",
    startDate: '2023-09-07',
    calendar: "Cumpleaños"
    
}


const newEventModal_headerTitle = document.querySelector('#newEventModal_headerTitle') as HTMLHeadingElement;
const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn') as HTMLButtonElement;

export function openModal(initialDate?: string, event?: EventCal) {
    if (initialDate != undefined && initialDate != "") {
        modalForm_startDate_dateInput.value = initialDate
    }

    if (event != undefined) {
        newEventModal_headerTitle.innerText = "Edit event"
        modalForm_saveEventBtn.innerText = "Edit"

        modalForm_eventTitle.value = event.title
        modalForm_AllDayEventSwitch.checked = event.isAllDay
        modalForm_startDate_dateInput.value = event.startDate
        modalForm_startDate_hourInput.value = event.startHour
        modalForm_endDate_dateInput.value = event.endDate
        modalForm_endDate_hourInput.value = event.endHour
        modalForm_ReminderCheckbox.checked = event.reminder
        modalForm_ReminderCheckbox_options.value = event.timeReminder
        modalForm_description.value = event.decription
        modalForm_EventType.value = event.calendar
    }
    console.log(event)
    console.log(initialDate)
}
function resetModal() {
    formModal.reset()


    // modalForm_eventTitle.value = "";
    // modalForm_AllDayEventSwitch.checked = false;
    // modalForm_startDate_dateInput.value = "";
    // modalForm_endDate_hourInput.value = "";
    // modalForm_startDate_hourInput.value = "";
    // modalForm_endDate_dateInput.value = "";
    // modalForm_endDate_hourInput.value = "";
    // modalForm_ReminderCheckbox.checked = false;
    // modalForm_description.value = "";
    // modalForm_EventType.value = "Choose...";

    deleteErrorMessage('formTitleError')
    deleteErrorMessage('modalForm_startDate_errorMessage')
    deleteErrorMessage('modalForm_endDate_errorMessage')
    deleteErrorMessage('modalForm_calendarError')
}

window.addEventListener("load", init)
async function init() {
    createTypeFormView()
    createReminderTimesFormView()   
}

openAddEventModal_btn.addEventListener('click', () => {
    openModal("", testEvent)
})



modalForm_ReminderCheckbox.addEventListener('change', ()=> {
    hiddenReminderInput()
})
modalForm_AllDayEventSwitch.addEventListener('change', ()=> {
    hiddenDateInput()
})

function createTypeFormView() {
    calendarTypes.forEach((type) => {
        const typeFormView = document.createElement('option') as HTMLOptionElement
        typeFormView.innerText = type
        modalForm_EventType.appendChild(typeFormView)
     });
}

function createReminderTimesFormView() {
    reminderTimes.forEach((e) => {
        const reminderFormView = document.createElement('option') as HTMLOptionElement
        reminderFormView.innerText = e
        modalForm_ReminderCheckbox_options.appendChild(reminderFormView)
     });
}

function hiddenReminderInput() {
    if (modalForm_ReminderCheckbox.checked == true) {
        modalForm_ReminderCheckbox_options.disabled = false
        modalForm_ReminderOptions_container.hidden = false
    } else {
        modalForm_ReminderCheckbox_options.disabled = true
        modalForm_ReminderOptions_container.hidden = true
    }
}

function hiddenDateInput() {
    if (modalForm_AllDayEventSwitch.checked == true) {
        modalForm_startDate_container.hidden = true
        modalForm_startDate_hourInput.hidden = true
    } else {
        modalForm_startDate_container.hidden = false
        modalForm_startDate_hourInput.hidden = false
    }
}

export function isValidForm(): boolean {
    let isValid: boolean = false
  
    validateTitle()
    validateDate()
    validateCalendar()

   if (validateTitle() == true && validateDate() == true &&  validateCalendar() == true ) {
        isValid = true
   }
   console.log("validating form:" +   validateTitle() + validateDate() + validateCalendar())
   console.log("valid??:" + isValid)
  return isValid
}

function validateTitle(): boolean {
    let isValid: boolean = true
    const title = modalForm_eventTitle.value

    if (title.trim().length < 3) {
        setErrorMessage("formTitleError", "Please enter a valid title")
        isValid = false
    } else {
        deleteErrorMessage("formTitleError")
    }

    return isValid
}
function validateDate(): boolean {
    let isValid: boolean = true
    const isAllDay = modalForm_AllDayEventSwitch.checked
    const startDate = modalForm_startDate_dateInput.value
    const startHour = modalForm_startDate_hourInput.value
    const endDate = modalForm_endDate_dateInput.value
    const endHour = modalForm_endDate_hourInput.value
        if (isAllDay == false) {
            if (startDate == '' && startHour == '') {
                isValid = false
                setErrorMessage("modalForm_startDate_errorMessage", "Please select a initial date & hour")
            } else if ( startDate == '' && startHour != '') {
                isValid = false
                setErrorMessage("modalForm_startDate_errorMessage", "Please select a initial date")
            } else if (startDate != '' && startHour == '') {
                isValid = false
                setErrorMessage("modalForm_startDate_errorMessage", "Please select a initial hour")
            
            } else {
                deleteErrorMessage("modalForm_startDate_errorMessage")
            }

            if (endDate == '' && endHour == '') {
                isValid = false
                setErrorMessage("modalForm_endDate_errorMessage", "Please select a end date & hour")
            } else if ( endDate == '' && endHour != '') {
                isValid = false
                setErrorMessage("modalForm_endDate_errorMessage", "Please select a end date")
            } else if (endDate != '' && endHour == '') {
                isValid = false
                setErrorMessage("modalForm_endDate_errorMessage", "Please select a end hour")
            
            } else {
                deleteErrorMessage("modalForm_endDate_errorMessage")
            }
        } else {
            if ( startDate == '') {
                isValid = false
                setErrorMessage("modalForm_startDate_errorMessage", "Please select a initial date")
           
            } else {
                deleteErrorMessage("modalForm_startDate_errorMessage")
                deleteErrorMessage("modalForm_endDate_errorMessage")
            }
        }

    return isValid
}
function validateCalendar(): boolean {
    let isValid: boolean = true
    const calendar = modalForm_EventType.value

    if (calendar == "Choose...") {
        isValid = false
        setErrorMessage("modalForm_calendarError", "Please select a calendar")
    } else {
        deleteErrorMessage("modalForm_calendarError")
    }

    return isValid
}

function setErrorMessage(containerID: String, message: string) {
    const container = document.getElementById(`${containerID}`)
    container.hidden = false
    container.innerText = message
}
function deleteErrorMessage(containerID: String) {
    const container = document.getElementById(`${containerID}`)
    container.hidden = true
}

export function setEventInfo(): EventCal {

    let reminder: string = ''
    if (modalForm_ReminderCheckbox.checked == true) {
        reminder = modalForm_ReminderCheckbox_options.value
    }

    let endDate = modalForm_endDate_dateInput.value
    if (modalForm_AllDayEventSwitch.checked == true) {
        endDate = modalForm_startDate_dateInput.value
    }

    let newEvent: EventCal =  {
        title: modalForm_eventTitle.value,
        isAllDay: modalForm_AllDayEventSwitch.checked,
        startDate: modalForm_startDate_dateInput.value ,
        startHour: modalForm_startDate_hourInput.value,
        endDate: endDate,
        endHour: modalForm_endDate_hourInput.value,
        reminder: modalForm_ReminderCheckbox.checked,
        timeReminder: reminder,
        decription: modalForm_description.value,

        calendar: modalForm_EventType.value
    }
    console.log(newEvent)
    console.log(newEvent.startDate, newEvent.startHour)
    return newEvent
 } 

export function closeModal() {
    createEvent_Modal.hidden = true
    resetModal()
}

