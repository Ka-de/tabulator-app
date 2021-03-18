import { Entity } from "@app/utils/custom.type";
import { TableColumnDTO } from "../dtos/tables-column.dto";

export class TableRow {
    r_id!: string;

    constructor(data: any, columns: TableColumnDTO[]) {
        const columnEntity: Entity<TableColumnDTO> = columns.reduce((acc, column) =>
            ({ ...acc, [column.name]: column }), {});

        for (let i in columnEntity) {
            (this as any)[i] = data[i];
        }
    }
}