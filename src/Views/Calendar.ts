export function getDate(dateKey:number) {
    const yearOffset = (dateKey - 32) % 512;
    const year = (dateKey - 32 - yearOffset) / 512;
    const day = yearOffset % 32;
    const month = (yearOffset - day) / 32;
    return new Date(year + 1970, month, day);
}

const stringDay = new Date().toString().slice(0,3);

export function getToday(){
    const date = new Date;
    return date;
}

export function getDay(){
    const day = getToday().getDate();
    return day;
}

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
    const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 
    const calendarTitle = document.querySelector('#calendarTitle');
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
    printMonth()
});

buttonLeft?.addEventListener('click', () => {
    M--;
    if(M == (-1)){
        M = 11;
        Y--;
    }
    printMonth()
});




console.log(getDate(123456));
console.log(getDay());
console.log(getMonth());
console.log(getYear());



