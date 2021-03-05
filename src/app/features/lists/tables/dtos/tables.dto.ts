import { TableDataTypes } from "@app/features/lists/tables/models/tables.model";

export interface TableColumnDTO {
    name: string;
    datatype: TableDataTypes;
    required?: boolean;
    unique?: boolean;
    attributes?: any;
}