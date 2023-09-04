

export function getDate(dateKey:number) {
    const yearOffset = (dateKey - 32) % 512;
    const year = (dateKey - 32 - yearOffset) / 512;
    const day = yearOffset % 32;
    const month = (yearOffset - day) / 32;
    return new Date(year + 1970, month, day);
}

export function getToday(){
    const date = new Date;
    return date;
}
 let numberMonth = 1

export function getMonth(){
    const date = new Date;
    return date.getMonth();
}

export function getYear(){
    const date = new Date;
    return date.getFullYear();
}

let M = getMonth();
let Y = getYear();
export function printMonth(){
    const Month = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"] 
    const calendarTitle = document.querySelector('#calendarTitle');
    const calendarDay = document.createElement('div');
    calendarTitle!.textContent = `${Month[M]} of ${Y}`;
}
 
// funcionalidad de los botones de la calendar

const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');


buttonRight?.addEventListener('click', () => {
    M++;
    if(M == 12){
        M = 0;
        Y++;
    }
    getMonth();
    printMonth()
});

buttonLeft?.addEventListener('click', () => {
    M--;
    if(M == 0){
        M = 12
        Y--;
    }
    getMonth();
    printMonth()
});






export function getDay(){
    const day = getToday().getDate();
    return day;
}


