import { TableColumn } from "./tables-column.model";
import { TableRow } from "./tables-rows.model";

export interface TableEditable {
    title: string;
    description?: string;
}

export interface TableDTO extends TableEditable {
    attatchments: string[];
}

export enum TableDataTypes {
    TEXT = "text",
    LONG_TEXT = "long text",
    NUMBER = "number",
    SELECT = "select",
    MONEY = "money",
    DATE = "date",
    TIME = "time",
    DATE_TIME = "date time",
    LOOKUP = "look up",
    BOOLEAN = "boolean",
    IMAGE = "image",
    URL = "url",
    FORMULAR = "formular",
    STATUS = "status",
    COLLECTION = "collection"
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