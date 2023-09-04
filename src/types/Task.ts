
export interface Task {
    id: number;
    name: string;
    isAllDay?: boolean;
    startDate?: Date;
    endDate?: Date;
    reminder?: boolean;
    startReminder?: Date;
    decription?: string;

    value?: Type;
}

export enum Type {
    Cumpleaños = "cumpleaños",
    Trabajo = "trabajo",
    Familia = "familia",
    Personal = "personal",
    Gimnasio = "gimnasio",
    Assembler = "assembler",
}

