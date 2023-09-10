
export interface EventCal {
    id: number;
    title: string;
    isAllDay?: boolean;
    startDate: string;
    startHour?: string
    endDate?: string;
    endHour?: string
    reminder?: boolean;
    timeReminder?: string;
    decription?: string;

    calendar: string;
}

export enum Type {
    Cumpleaños = "cumpleaños",
    Trabajo = "trabajo",
    Familia = "familia",
    Personal = "personal",
    Gimnasio = "gimnasio",
    Assembler = "assembler",
}

export enum ReminderTime {
    Min5 = "5 min",
    Min15 = "15 min",
    Hour1 = "1 hour",
    Hour2 = "2 hours",
    Day1 = "1 day",
    Day2 = "2 days",
    Week1 = "1 week",
}