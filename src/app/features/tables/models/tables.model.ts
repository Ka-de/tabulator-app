import { Row } from '@app/features/rows/models/tables-rows.model';
import { Column } from '@app/features/columns/models/tables-column.model';

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
    SELECT = "select",
    IMAGE = "image",

    // LOOKUP = "lookup",    
    // FORMULAR = "formular",
    // COLLECTION = "collection",

}

export interface Table extends TableEditable {
    attatchments: string[];
    length: number;
    itemsLength: number;
    version: string;
    columns: Column[];
    rows: Row[];
    _id: string;
}

export enum TableEvents {
    VIEW = "view",
    EDIT = "edit",
    DELETE = "delete"
}