import { isValidForm, setEventInfo, closeModal } from "./form.js"
import { Type, EventCal } from "./types/EventCal.js" 


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