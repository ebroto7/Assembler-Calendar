import { Days } from "../Days.js";
import { EventCal } from "../types/EventCal.js";
import { openModal } from "../form.js";
let Days: Days = {
    id: '',
    dayNum: 0,
    dayStr: '',
    mthNum: 0,
    mthStr: '',
    year: 0,
}
const Month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"]

// function getDate(dateKey:number) {
//     const yearOffset = (dateKey - 32) % 512;
//     const year = (dateKey - 32 - yearOffset) / 512;
//     const day = yearOffset % 32;
//     const month = (yearOffset - day) / 32;
//     return new Date(year + 1970, month, day);
// }

// function getDateDay(date:Date){
//     return date.toString().slice(0,3);
//     // new Date().toString().slice(0,3);
//     }
// function getDateMonth(date:Date){
//     return date.toString().slice(4,7)
//     }
// function getDateNumDay(date:Date){
//     return date.toString().slice(8,10);
//     }

// function getDateYear(date:Date){
//     return date.toString().slice(11,15);
//     }

// function createDateID(x:number){
//         return getDateMonth(getDate(x)) + getDateNumDay(getDate(x)) + getDateYear(getDate(x));
// }

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
        });
        todayDecoration(i, month, today, createDay, row);
        // printEvents(events, createDay);

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
export function printEvents(events: EventCal[], createDay: HTMLButtonElement) {
    events.forEach(event => {
        if (createDay.id == event.startDate) {
            const day = document.getElementById(`${Days.id}`)
            day.style.backgroundColor = 'red';

        }
    });
}




// console.log(getDate(123456));
console.log(getTodayDay());
console.log(getTodayMonth());
console.log(getTodayYear());
console.log(Days.id);


