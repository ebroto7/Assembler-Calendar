//  import { getDate, getDay, getMonth, getToday } from './Views/Calendar.js';

function getDate(dateKey:number) {
    const yearOffset = (dateKey - 32) % 512;
    const year = (dateKey - 32 - yearOffset) / 512;
    const day = yearOffset % 32;
    const month = (yearOffset - day) / 32;
    return new Date(year + 1970, month, day);
}

function getToday(){
    const date = new Date;
    return date;
}

function getMonth(){
    const date = new Date;
    const month = date.getMonth()+1;
    // switch(month){
    //     case 1: "January";
    //     case 2: "February";
    //     case 3: "March";
    //     case 4:
    //     case 5:
    //     case 6:
    //     case 7:
    //     case 8:
    //     case 9:
    //     case 10:
    //     case 11:
    //     case 12:
    // }
}

function getYear(){
    const date = new Date;
    return date.getFullYear();
}

function getDay(){
    const day = getToday().getDate();
    return day;
}

const calendarTitle = document.querySelector('#calendarTitle');
const calendarDay = document.createElement('div');
calendarDay.textContent = `${getDay().toString()} of ${getMonth()}`;
calendarTitle?.appendChild(calendarDay);



console.log(getToday());
console.log(getMonth());
console.log(getYear());
console.log(getDay());





