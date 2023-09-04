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

export function getYear(){
    const date = new Date;
    return date.getFullYear();
}

export function getDay(){
    const day = getToday().getDate();
    return day;
}


