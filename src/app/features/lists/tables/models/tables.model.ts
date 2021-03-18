import { TableColumn } from "./tables-column.model";
import { TableRow } from "./tables-rows.model";

export interface TableEditable {
    title: string;
    description?: string;
}

export enum TableDataTypes {
    TEXT = "text",
    LONGTEXT = "longtext",
    NUMBER = "number",
    BOOLEAN = "boolean",
    DATE = "date",
    TIME = "time",
    DATETIME = "datetime",
    MONEY = "money",
    URL = "url",
    CHOICE = "choice",

    LOOKUP = "lookup",    
    FORMULAR = "formular",
    COLLECTION = "collection",

    IMAGE = "image",
}

export interface Table extends TableEditable {
    attatchments: string[];
    length: number;
    itemsLength: number;
    version: string;
    columns: TableColumn[];
    rows: TableRow[];
    _id: string;
}

export enum TableEvents {
    VIEW = "view",
    EDIT = "edit",
    DELETE = "delete"
}