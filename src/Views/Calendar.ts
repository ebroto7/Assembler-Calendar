import { Days } from "../Days.js";
import { EventCal } from "../types/EventCal.js";
import { openModal } from "../form.js";
import { getAndParseLSinfo } from "../index.js";
let Days:Days = {
    id    : '' ,
    dayNum: 0,
    dayStr: '',
    mthNum: 0,
    mthStr: '',
    year  : 0,
}

const events =  getAndParseLSinfo('events'); //[event1, event2, event3]
const Month = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"] 


function getToday(){
    const date = new Date;
    return date;
}

function getTodayDay(){
    const day = getToday().getDate();
    return day;
}

function getTodayMonth(){
    const date = new Date;
    return date.getMonth();
}

function daysInMonth(month:number , year:number){
    return new Date(year, month, 0).getDate();    
}
console.log(daysInMonth(9, 2023));

function getTodayYear(){
    const date = new Date;
    return date.getFullYear();
}

let M = getTodayMonth();
let Y = getTodayYear();
export function printMonth(){
    const calendarTitle = document.querySelector('#calendarTitle');
    calendarTitle!.textContent = `${Month[M]} of ${Y}`;
    

}
 
// funcionalidad de los botones de la calendar

const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
const buttonToday = document.getElementById('todayButton');

function changeMinusMonth(){
    M--;
    if(M == (-1)){
        M = 11;
        Y--;
    }
}
function changePlusMonth(){
    M++;
    if(M == 12){
        M = 0;
        Y++;
    }
}


buttonRight?.addEventListener('click', () => {
    changePlusMonth();
    printMonth();
    printDays();
});

buttonLeft?.addEventListener('click', () => {
    changeMinusMonth();
    printMonth();
    printDays();
});

buttonToday?.addEventListener('click', () => {
    M = getTodayMonth();
    Y = getTodayYear();
    
    printMonth();
    printDays();
})


//////////////////////////////////////////////////////////////////////////////////////
// print dias
export function printDays(){
    const row = document.querySelector('#days') as HTMLDivElement; 
    const lastDayMonth = daysInMonth(Y, M+1)
    const firstDay = new Date(Y, M, 0).getDay();
    const lastDay = new Date(Y, M+1, lastDayMonth).getDay();
    row?.replaceChildren()
    createInactivePastDay(firstDay, row);
    createActiveDay(row);
    createInactiveNextDay(lastDay, row);
    
    }
function createActiveDay(row: HTMLDivElement){
    for( let i = 1 ;i <= daysInMonth(M+1, Y); i++){ 
        // const today = getTodayDay();
        const createDay  = document.createElement('button');
        createDay.classList.add("col", "colHov", "dayButton");
        createDay.setAttribute ("data-bs-toggle","modal") 
        createDay.setAttribute ("data-bs-target", "#createEvent_Modal")
        let day = i;
        let month = M+1;
        let zeroDay = '0' + day;
        let zeroMonth = '0' + month;
        if(month < 10){ createDay.id = `${Y}-${zeroMonth}-${day}`;
            if(day < 10){createDay.id = `${Y}-${zeroMonth}-${zeroDay}`
                }
        }
        else if(day < 10){createDay.id = `${Y}-${month}-${zeroDay}`
            if(month < 10){createDay.id = `${Y}-${zeroMonth}-${zeroDay}`
                }     
        }
        else {createDay.id = `${Y}-${month}-${day}`
            }
        createDay.innerText = `${i}`;
        row?.appendChild(createDay);
        
        createDay.addEventListener('click', () => {console.log(createDay.id);
                                    setInfoModalDay(createDay.id)});
        todayDecoration(i,month, createDay);
        assignDayObject(createDay, month, i);
        if(events != undefined ){
        printEvents(events, createDay);
        }
    }
}
function createInactivePastDay(firstDay:number, row:HTMLDivElement){
    for (let i = firstDay; i > 0; i--){
        let previousDays = daysInMonth(M, Y) -i + 1;
        const day  = document.createElement('button');
        day.classList.add("col",  "inactive", 'dayButton');

        day.addEventListener('click', () => {
            changeMinusMonth();
            printMonth();
            printDays();
            // setInfoModalDay(day.id);
        });

        day.innerText += `${previousDays}`;
        row?.appendChild(day);
    }
} 
function createInactiveNextDay(lastDay:number, row:HTMLDivElement){
    for (let i = lastDay; i < 10 ; i++) {
        const day  = document.createElement('button');
        const nextDays = i -lastDay + 1;
        day.classList.add("col", "inactive", 'dayButton');

        day.addEventListener('click', () => {
            changePlusMonth();
            printMonth();
            printDays();
        });

        day.innerText = `${nextDays}`;
        row?.appendChild(day);
    }
}
function todayDecoration(i:number,month:number, createDay:HTMLButtonElement){
    if(i == getTodayDay() && month == getTodayMonth()+1 && Y == getTodayYear()){
        createDay.classList.add("col", "today") }
}

function assignDayObject(createDay:HTMLButtonElement, month:number, i:number){
    Days.id = createDay.id;
    Days.mthNum = month;
    Days.dayNum = i;
    Days.year = Y;
}
function setInfoModalDay(date:string){
    openModal(date);
}

function createEventOnCalendar(event:EventCal, container:HTMLButtonElement){
    const containerEvent = document.createElement("div") as HTMLDivElement;
    containerEvent.id = 'eventOnCalendar';
    containerEvent.classList.add('eventOnCalendar-container');
    const labelEvent = document.createElement("p") as HTMLParagraphElement;
    labelEvent.classList.add('eventTitleOnCalendar');
    labelEvent.innerText = event.title;
    containerEvent.appendChild(labelEvent);
    container.appendChild(containerEvent);
    labelEvent.addEventListener ('click', () =>{
        openModal('' ,event)
    });
    
}

export function printEvents(events:EventCal[], container:HTMLButtonElement){
        events.forEach(event => {
            if(Days.id == event.startDate || Days.id == event.startDate && Days.id == event.endDate){
                createEventOnCalendar(event, container);
                console.log(Days.id)
                console.log(event.startDate);
            }   
        });
}

    


// console.log(getDate(123456));
console.log(getTodayDay());
console.log(getTodayMonth());
console.log(getTodayYear());
console.log(Days.id);
