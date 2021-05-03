import { Entity } from "@app/utils/custom.type";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Table } from "../models/tables.model";
import { TableState } from "./tables.reducer";

export const selectTableState = createFeatureSelector<TableState>('tables');

export const selectAllTables = createSelector(
    selectTableState,
    (tableState: TableState) => {
        const { tables }: { tables: Entity<Table> } = tableState;
        return Object.values(tables);
    }
);

export const selectCurrentTable = createSelector(
    selectTableState,
    (tableState: TableState) => {
        const { tables, selected }: { tables: Entity<Table>, selected: string | null } = tableState;
        return tables[selected as string];
    }
);