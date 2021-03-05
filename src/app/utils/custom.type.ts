export interface CustomType {
    [key: string]: any
}

export interface Entity<T> {
    [name: string]: T;
}

export type Writeable<T> = {
    -readonly [P in keyof T]-?: T[P]
}