import { TableEditable } from "../models/tables.model";

export interface TableDTO extends TableEditable {
    attatchments: string[];
}