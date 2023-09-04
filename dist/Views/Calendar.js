export function getDate(dateKey) {
    const yearOffset = (dateKey - 32) % 512;
    const year = (dateKey - 32 - yearOffset) / 512;
    const day = yearOffset % 32;
    const month = (yearOffset - day) / 32;
    return new Date(year + 1970, month, day);
}
export function getToday() {
    const date = new Date;
    return date;
}
export function getMonth() {
    const date = new Date;
    return date.getMonth() + 1;
}
export function getDay() {
    const day = getToday().getDate();
    return day;
}
