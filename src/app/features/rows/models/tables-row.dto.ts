export class RowDTO {
    r_id!: string;

    constructor(
        data: RowDTO | Partial<RowDTO>
    ) {
        Object.keys(data).map(k => {
            (this as any)[k] = (data as any)[k];
        });
    }
}
