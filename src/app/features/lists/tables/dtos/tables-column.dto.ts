import { TableDataTypes } from "../models/tables.model";

export interface TableColumnDTO {
    name: string;
    datatype: TableDataTypes;
    description?: string;
    required?: boolean;
    unique?: boolean;
    attributes?: any;
}

export interface TableColumnCloneDTO extends TableColumnDTO {
    withrows: boolean;
    from: string;
}