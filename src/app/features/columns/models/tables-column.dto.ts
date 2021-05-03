import { TableDataTypes } from "../../tables/models/tables.model";

export interface ColumnDTO {
    name: string;
    datatype: TableDataTypes;
    description?: string;
    required?: boolean;
    unique?: boolean;
    attributes?: any;
}

export interface ColumnCloneDTO extends ColumnDTO {
    withrows: boolean;
    from: string;
}