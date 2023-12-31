import { EventCal, Type, ReminderTime } from "./types/EventCal.js";


export const calendarTypes = Object.keys(Type)
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

const newEventModal_headerTitle = document.querySelector('#newEventModal_headerTitle') as HTMLHeadingElement;
const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn') as HTMLButtonElement;
const modalForm_deleteEventBtn = document.querySelector('#modalForm_deleteEventBtn') as HTMLButtonElement;
const modalForm_cancelSaveEventBtn = document.querySelector('#modalForm_cancelSaveEventBtn') as HTMLButtonElement;
const modalForm_editEventBtn = document.querySelector('#modalForm_editEventBtn') as HTMLButtonElement;

let temporaryEvent: EventCal;

modalForm_cancelSaveEventBtn.addEventListener('click', () => {
    resetModal()
})

export function openModal(initialDate?: string, event?: EventCal) {
    createTypeFormView()
    createReminderTimesFormView()   
    setMinStartDateHour()

    if (initialDate != undefined && initialDate != "") {
        modalForm_startDate_dateInput.value = initialDate
        modalForm_endDate_dateInput.setAttribute("min", `${initialDate}`)
    }

    if (event == undefined) {
        newEventModal_headerTitle.innerText = "Add new event"
        modalForm_saveEventBtn.hidden = false
        modalForm_editEventBtn.hidden = true
        modalForm_deleteEventBtn.hidden = true
        console.log("open modal w/out event")
    } else {
        temporaryEvent = event
        console.log("function openModal temporay event: "+temporaryEvent)
        newEventModal_headerTitle.innerText = "Edit event"
        modalForm_saveEventBtn.hidden = true
        modalForm_editEventBtn.hidden = false
        modalForm_deleteEventBtn.hidden = false

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
        console.log("open modal w event")
    }
}

function setMinStartDateHour() {
    const today = new Date().toJSON().slice(0,10)
    modalForm_startDate_dateInput.setAttribute("min", `${today}`)
    modalForm_startDate_dateInput.value = today
    modalForm_endDate_dateInput.setAttribute("min", `${today}`)

    // const now = new Date().toJSON().slice(11, 16)
    // modalForm_startDate_hourInput.value = now
    // console.log("hour: "+now)
}

function resetModal() {
    formModal.reset()
    // modalForm_deleteEventBtn.removeAttribute("id")
    temporaryEvent = null

    deleteErrorMessage('formTitleError')
    deleteErrorMessage('modalForm_startDate_errorMessage')
    deleteErrorMessage('modalForm_endDate_errorMessage')
    deleteErrorMessage('modalForm_calendarError')
}


openAddEventModal_btn.addEventListener('click', () => {
    openModal()
})

modalForm_ReminderCheckbox.addEventListener('change', ()=> {
    hiddenReminderInput()
})
modalForm_AllDayEventSwitch.addEventListener('change', ()=> {
    hiddenDateInput()
})
modalForm_startDate_dateInput.addEventListener('change', () => {
    changeFinalDateInput()
})
function createTypeFormView() {
    modalForm_EventType.replaceChildren()
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


    let id = createEventID()
    if (temporaryEvent != null) {
        id = temporaryEvent.id
        console.log("temporaryEvent id: "+ id)
    }
    let newEvent: EventCal =  {
        id: id,
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

function createEventID(): string {
    const id = new Date().getTime().toString()
    return id
}

function changeFinalDateInput() {
    const minDate = modalForm_startDate_dateInput.value
    modalForm_endDate_dateInput.setAttribute("min", `${minDate}`)
}