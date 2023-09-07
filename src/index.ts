 import { printMonth, printDays, printEvents  } from './Views/Calendar.js';

import { isValidForm, saveNewEvent } from "./form.js"
import { Type, EventCal } from "./types/EventCal.js"

const event1:EventCal = {
    title: 'alex nace',
}
const event2:EventCal = {
    title: 'alex muere',
}

const event3:EventCal = {
    title: 'alex renace',
}

const events = [event1, event2, event3]



 window.addEventListener('DOMContentLoaded', () => {
    printMonth();
    printDays();
    printEvents(events);
 } );


const main = document.querySelector("#main") as HTMLDivElement

const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn') as HTMLButtonElement
modalForm_saveEventBtn.addEventListener('click', ()=> {
    saveNewEvent();
    console.log("save event")
    console.log(isValidForm())

})
