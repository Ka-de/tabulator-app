import { TableDataTypes } from "./tables.model";

export interface TableColumn {
    _id: string;
    name: string;
    datatype: TableDataTypes;
    required?: boolean;
    unique?: boolean;
    description?: string;
    attributes?: any;
}