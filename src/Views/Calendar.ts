import { Days } from "../Days.js";
import { EventCal, Type } from "../types/EventCal.js";
import { openModal } from "../form.js";
import { getAndParseLSinfo } from "../index.js";
let Days:Days = {
    id    : '' ,
    dayNum: 0,
    dayStr: '',
    mthNum: 0,
    mthStr: '',
    year: 0,
}

const events =  getAndParseLSinfo('events'); //[event1, event2, event3]
const Month = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"] 


function getToday() {
    const date = new Date;
    return date;
}

function getTodayDay() {
    const day = getToday().getDate();
    return day;
}

function getTodayMonth() {
    const date = new Date;
    return date.getMonth();
}

function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(9, 2023));

function getTodayYear() {
    const date = new Date;
    return date.getFullYear();
}

let M = getTodayMonth();
let Y = getTodayYear();
export function printMonth() {
    const calendarTitle = document.querySelector('#calendarTitle');
    calendarTitle!.textContent = `${Month[M]} of ${Y}`;


}

// funcionalidad de los botones de la calendar

const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
const buttonToday = document.getElementById('todayButton');

function changeMinusMonth() {
    M--;
    if (M == (-1)) {
        M = 11;
        Y--;
    }
}
function changePlusMonth() {
    M++;
    if (M == 12) {
        M = 0;
        Y++;
    }
}


buttonRight?.addEventListener('click', () => {
    changePlusMonth();
    printMonth();
    printDays("days");
    printDays("days2");
});

buttonLeft?.addEventListener('click', () => {
    changeMinusMonth();
    printMonth();
    printDays("days");
    printDays("days2");
});

buttonToday?.addEventListener('click', () => {
    M = getTodayMonth();
    Y = getTodayYear();

    printMonth();
    printDays("days");
    printDays("days2");
})


//////////////////////////////////////////////////////////////////////////////////////
// print dias
export function printDays(id: string) {
    const row = document.querySelector(`#${id}`) as HTMLDivElement;
    const lastDayMonth = daysInMonth(Y, M + 1)
    const firstDay = new Date(Y, M, 0).getDay();
    const lastDay = new Date(Y, M + 1, lastDayMonth).getDay();
    row?.replaceChildren()
    createInactivePastDay(firstDay, row);
    createActiveDay(row);
    createInactiveNextDay(lastDay, row);

}


function createActiveDay(row: HTMLDivElement) {
    for (let i = 1; i <= daysInMonth(M + 1, Y); i++) {
        const today = getTodayDay();
        const createDay = document.createElement('button');
        if (row.id == "days") {
            createDay.classList.add("col", "colHov");
            createDay.setAttribute("data-bs-toggle", "modal")
            createDay.setAttribute("data-bs-target", "#createEvent_Modal")
        } else if (row.id == "days2") {
            createDay.classList.add("col2", "colHov");
        }

        let day = i;
        let month = M + 1;
        let zeroDay = '0' + day;
        let zeroMonth = '0' + month;
        if (month < 10) {
            createDay.id = `${Y}-${zeroMonth}-${day}`;
            if (day < 10) {
                createDay.id = `${Y}-${zeroMonth}-${zeroDay}`
            }
        }
        else if (day < 10) {
            createDay.id = `${Y}-${month}-${zeroDay}`
            if (month < 10) {
                createDay.id = `${Y}-${zeroMonth}-${zeroDay}`
            }
        }
        else {
            createDay.id = `${Y}-${month}-${day}`
        }
        createDay.innerText = `${i}`;
        row?.appendChild(createDay);
        assignDayObject(createDay, month, i);
        createDay.addEventListener('click', () => {
            console.log(createDay.id);
            setInfoModalDay(createDay.id)
            console.log("function createActiveDay createDay.addEventListener click")
        });
        todayDecoration(i, month, today, createDay, row);
        printEvents(events, createDay);

    }
}
function createInactivePastDay(firstDay: number, row: HTMLDivElement) {
    for (let i = firstDay; i > 0; i--) {
        let previousDays = daysInMonth(M, Y) - i + 1;
        const day = document.createElement('button');

        if (row.id == "days") {
            day.classList.add("col", "colHov", "inactive");
        } else if (row.id == "days2") {
            day.classList.add("col2", "colHov", "inactive");
        }

        day.addEventListener('click', () => {
            changeMinusMonth();
            printMonth();
            printDays("days");
            printDays("days2");
            // setInfoModalDay(day.id);
        });

        day.innerText += `${previousDays}`;
        row?.appendChild(day);
    }
}
function createInactiveNextDay(lastDay: number, row: HTMLDivElement) {
    for (let i = lastDay; i < 10; i++) {
        const day = document.createElement('button');
        const nextDays = i - lastDay + 1;
        if (row.id == "days") {
            day.classList.add("col", "colHov", "inactive");
        } else if (row.id == "days2") {
            day.classList.add("col2", "colHov", "inactive");
        }

        day.addEventListener('click', () => {
            changePlusMonth();
            printMonth();
            printDays("days");
            printDays("days2");
        });

        day.innerText = `${nextDays}`;
        row?.appendChild(day);
    }
}
function todayDecoration(i: number, month: number, today: number, createDay: HTMLButtonElement, row) {
    if (i == today && month == getTodayMonth() + 1 && Y == getTodayYear()) {
        if (row.id == "days") {
            createDay.classList.add("col", "colHov");
        } else if (row.id == "days2") {
            createDay.classList.add("col2", "colHov");
        }
    }
}
function assignDayObject(createDay: HTMLButtonElement, month: number, i: number) {
    Days.id = createDay.id;
    Days.mthNum = month;
    Days.dayNum = i;
    Days.year = Y;
}
function setInfoModalDay(date: string) {
    openModal(date);
}

function createEventOnCalendar(event:EventCal, container:HTMLButtonElement){
    const containerEvent = document.createElement("div") as HTMLDivElement;
    containerEvent.id = 'eventOnCalendar';
    containerEvent.classList.add('eventOnCalendar-container');
    containerEvent.style.backgroundColor = getEventColor(event.calendar)
    const labelEvent = document.createElement("p") as HTMLParagraphElement;
    labelEvent.classList.add('eventTitleOnCalendar');
    labelEvent.id = 'eventTitleOnCalendar'
    labelEvent.setAttribute("onclick", "event.stopPropagation();")
    labelEvent.innerText = event.title;
    containerEvent.appendChild(labelEvent);
    container.appendChild(containerEvent);
    labelEvent.addEventListener ('click', () =>{
        openModal('' ,event)
        console.log("function createEventOnCalendar labelEvent.addEventListener click")
    });
    
}
function getEventColor(calendar: string) {
    switch (calendar) {
        case "Birthday": 
            return 'lightgreen';
        case "Assembler": 
            return 'lightcoral';
        case "Family": 
            return 'lightgoldenrodyellow';
        case "Gym": 
            return 'lightblue';
        case "Personal": 
            return 'lightsalmon';
        case "Work": 
            return 'lightgray';
        
        default:
            // throw new Error(`Non-existent type in switch: ${calendar}`);
            console.log(`Non-existent type in switch: ${calendar}`)
        
    }

}
export function printEvents(events:EventCal[], container:HTMLButtonElement){
        events.forEach(event => {
            if(Days.id == event.startDate || Days.id == event.startDate && Days.id == event.endDate){
                createEventOnCalendar(event, container);
            }   
        });
}




// console.log(getDate(123456));
console.log(getTodayDay());
console.log(getTodayMonth());
console.log(getTodayYear());
console.log(Days.id);
