import { ToastService } from "@app/features/toast/toast.service";
import { Entity } from "@app/utils/custom.type";
import { Table } from "../models/tables.model";
import { TableColumnDTO } from "./tables.dto";

export class TableRowDTO {
    r_id!: string;
    constructor(
        data: TableRowDTO | Partial<TableRowDTO>,
        table: Table,
        toastService: ToastService
    ) {
        const columnEntity: Entity<TableColumnDTO> = table.columns.reduce((acc, column) =>
            ({ ...acc, [column.name]: column }), {});
        for (let i in columnEntity) {
            if (columnEntity[i].required && !(data as any)[i]) toastService.showMessage({
                title: 'Row',
                details: `${i} is required in table's row`,
                type: 'error'
            })

            if (columnEntity[i].unique) {
                const found = table.rows.find(u => {
                    return ((u as any)[i] != (data as any)[i])
                        ? false
                        : !data.r_id
                            ? true
                            : data.r_id == u.r_id
                                ? false
                                : true;
                });
                if (found) toastService.showMessage({
                    title: 'Row',
                    details: `${i} is unique in table`,
                    type: 'error'
                })
            }
        }
    }
}