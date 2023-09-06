 import { printMonth, printDays  } from './Views/Calendar.js';
 
 window.addEventListener('DOMContentLoaded', () => {
    printMonth();
    printDays();
 } );






import { isValidForm } from "./form.js"
import { Type } from "./types/Event.js"

const main = document.querySelector("#main") as HTMLDivElement

const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn') as HTMLButtonElement
modalForm_saveEventBtn.addEventListener('click', ()=> {
    // isValidForm()
    console.log("save event")
    console.log(isValidForm())

})
