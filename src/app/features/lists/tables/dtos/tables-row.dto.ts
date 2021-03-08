export class TableRowDTO {
    r_id!: string;

    constructor(
        data: TableRowDTO | Partial<TableRowDTO>
    ) {
        Object.keys(data).map(k => {
            (this as any)[k] = (data as any)[k];
        });
    }
}
