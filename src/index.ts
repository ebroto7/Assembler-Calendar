import { isValidForm, saveNewEvent } from "./form.js"
import { Type } from "./types/Event.js" 


const main = document.querySelector("#main") as HTMLDivElement
const createEvent_Modal = document.querySelector('#createEvent_Modal')

const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn') as HTMLButtonElement
modalForm_saveEventBtn.addEventListener('click', ()=> {
    if (isValidForm() == true) {
        saveNewEvent()
     //   createEvent_Modal.setAttribute("data-bs-dismiss", "modal")

    }
    console.log("is valid form?" + isValidForm())


})