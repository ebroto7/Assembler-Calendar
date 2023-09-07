import { isValidForm, saveNewEvent, closeModal } from "./form.js"
import { Type, EventCal } from "./types/EventCal.js" 


const main = document.querySelector("#main") as HTMLDivElement
const createEvent_Modal = document.querySelector('#createEvent_Modal')

const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn') as HTMLButtonElement
modalForm_saveEventBtn.addEventListener('click', ()=> {
    if (isValidForm() == true) {
        saveNewEvent()
        closeModal()
    }
    console.log("is valid form?" + isValidForm())

})