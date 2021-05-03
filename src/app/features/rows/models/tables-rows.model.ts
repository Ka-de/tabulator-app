import { ColumnDTO } from "@app/features/columns/models/tables-column.dto";
import { Entity } from "@app/utils/custom.type";

export class Row {
    r_id!: string;

    constructor(data: any, columns: ColumnDTO[]) {
        const columnEntity: Entity<ColumnDTO> = columns.reduce((acc, column) =>
            ({ ...acc, [column.name]: column }), {});

        for (let i in columnEntity) {
            (this as any)[i] = data[i];
        }
    }
}