import { TableDataTypes } from "@app/features/tables/models/tables.model";

export interface Column {
    _id: string;
    name: string;
    datatype: TableDataTypes;
    required?: boolean;
    unique?: boolean;
    description?: string;
    attributes?: any;
}