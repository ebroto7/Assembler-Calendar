
export interface EventCal {
    id: string;
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
    Birthday = "Birthday",
    Work = "Work",
    Family = "Family",
    Personal = "Personal",
    Gym = "Gym",
    Assembler = "Assembler",
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