 import { printMonth, printDays, printEvents  } from './Views/Calendar.js';

import { isValidForm, setEventInfo, closeModal } from "./form.js"
import { Type, EventCal } from "./types/EventCal.js"

const event1:EventCal = {
    title: 'alex nace',
    startDate : '12-08-2023',
    endDate : '12-09-2023'
    
}
const event2:EventCal = {
    title: 'alex muere',
    startDate : '19-09-2023',
    endDate : '19-09-2023'
}

const event3:EventCal = {
    title: 'alex renace',
    startDate : '12-09-2023',
    endDate : '14-09-2023'
}

const events = [event1, event2, event3]



 window.addEventListener('DOMContentLoaded', () => {
    printMonth();
    printDays();
    printEvents(events);
 } );


const main = document.querySelector("#main") as HTMLDivElement
const createEvent_Modal = document.querySelector('#createEvent_Modal')






const modalForm_saveEventBtn = document.querySelector('#modalForm_saveEventBtn') as HTMLButtonElement
modalForm_saveEventBtn.addEventListener('click', ()=> {
    if (isValidForm() == true) {
        const newEvent = setEventInfo()
        closeModal()
        saveNewEvent(newEvent)
        console.log("new event:" + JSON.stringify(newEvent))
    }
})

/**  SAVE AND RECOVER DATA  **/
function getAndParseLSinfo(key: string) {
    const objectsLS = localStorage.getItem(key)

    const parseInfoLS = JSON.parse(objectsLS)

    return parseInfoLS
}

function saveNewEvent(event: EventCal) {

    let savedEvents = getAndParseLSinfo('events')

    
    if (savedEvents !== null) {
        savedEvents.push(event)
      console.log('push: ' + savedEvents)
      localStorage.setItem("scores", JSON.stringify(savedEvents))

    } else {
        let newArray = [event]
        localStorage.setItem("scores", JSON.stringify(newArray))
        console.log('save: ' + savedEvents)
    }

    console.log(event) 
}
