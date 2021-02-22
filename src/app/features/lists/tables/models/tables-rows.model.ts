import { TableColumnDTO } from "../dtos/tables.dto";
import { TableColumnEntity } from "./tables.model";

export class TableRow {
    r_id!: string;

    constructor(data: any, columns: TableColumnDTO[]) {
        const columnEntity: TableColumnEntity<TableColumnDTO> = columns.reduce((acc, column) =>
            ({ ...acc, [column.name]: column }), {});

        for (let i in columnEntity) {
            (this as any)[i] = data[i];
        }
    }
}