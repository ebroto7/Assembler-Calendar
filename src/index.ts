 import { printMonth, printDays  } from './Views/Calendar.js';

import { isValidForm, saveNewEvent } from "./form.js"
import { Type } from "./types/Event.js"

 window.addEventListener('DOMContentLoaded', () => {
    printMonth();
    printDays();
 } );


const main = document.querySelector("#main") as HTMLDivElement

const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn') as HTMLButtonElement
modalForm_saveEventBtn.addEventListener('click', ()=> {
    saveNewEvent();
    console.log("save event")
    console.log(isValidForm())

})
