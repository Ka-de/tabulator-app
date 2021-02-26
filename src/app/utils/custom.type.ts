export interface CustomType {
    [key: string]: any
}

export interface Entity<T> {
    [name: string]: T;
}