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

export function getMonth(){
    const date = new Date;
    const month = date.getMonth()+1;
    switch(month){
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "Octuber";
        case 11: return "November";
        case 12: return "December";
    }
}

export function getYear(){
    const date = new Date;
    return date.getFullYear();
}

export function getDay(){
    const day = getToday().getDate();
    return day;
}


