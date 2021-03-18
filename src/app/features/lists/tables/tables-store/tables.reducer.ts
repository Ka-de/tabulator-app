import { Entity } from "@app/utils/custom.type";
import { TableColumn } from "../models/tables-column.model";
import { TableRow } from "../models/tables-rows.model";
import { Table } from "../models/tables.model";
import { CloneTableColumnSuccess, CreateTableColumnSuccess, CreateTableRowSuccess, CreateTableSuccess, DeleteTableColumnSuccess, DeleteTableRowSuccess, DeleteTableSuccess, GetTable, GetTablesSuccess, GetTableSuccess, TablesAction, TablesActionsType, UpdateTableColumnSuccess, UpdateTableRowSuccess, UpdateTableSuccess } from "./tables.action";

export interface TableState {
    tables: Entity<Table>;
    loading: boolean;
    loaded: boolean;
    selected: string | null;
    action: TablesActionsType | null;
}

const initialState: TableState = {
    tables: {},
    loading: false,
    loaded: false,
    selected: null,
    action: null
}

export function tableReducer(state = initialState, action: TablesAction): TableState {
    switch (action.type) {
        case TablesActionsType.GET_TABLES:
            return { ...state, loading: true, loaded: false, action: TablesActionsType.GET_TABLES }
        case TablesActionsType.GET_TABLE:
            return { ...state, loading: true, loaded: false, action: TablesActionsType.GET_TABLE, selected: (action as GetTable).payload }
        case TablesActionsType.CREATE_TABLE:
            return { ...state, loading: true, loaded: false, action: TablesActionsType.CREATE_TABLE }
        case TablesActionsType.UPDATE_TABLE:
            return { ...state, loading: true, loaded: false, action: TablesActionsType.UPDATE_TABLE }
        case TablesActionsType.DELETE_TABLE:
            return { ...state, loading: true, loaded: false, action: TablesActionsType.DELETE_TABLE }
        case TablesActionsType.CREATE_TABLE_COLUMN:
            return { ...state, loading: true, loaded: false, action: TablesActionsType.CREATE_TABLE_COLUMN }
        case TablesActionsType.UPDATE_TABLE_COLUMN:
            return { ...state, loading: true, loaded: false, action: TablesActionsType.UPDATE_TABLE_COLUMN }
        case TablesActionsType.CLONE_TABLE_COLUMN:
            return { ...state, loading: true, loaded: false, action: TablesActionsType.CLONE_TABLE_COLUMN }
        case TablesActionsType.DELETE_TABLE_COLUMN:
            return { ...state, loading: true, loaded: false, action: TablesActionsType.DELETE_TABLE_COLUMN }
        case TablesActionsType.CREATE_TABLE_ROW:
            return { ...state, loading: true, loaded: false, action: TablesActionsType.CREATE_TABLE_ROW }
        case TablesActionsType.UPDATE_TABLE_ROW:
            return { ...state, loading: true, loaded: false, action: TablesActionsType.UPDATE_TABLE_ROW }
        case TablesActionsType.DELETE_TABLE_ROW:
            return { ...state, loading: true, loaded: false, action: TablesActionsType.DELETE_TABLE_ROW }
        case TablesActionsType.GET_TABLES_SUCCESS:
            return {
                ...state,
                tables: (action as GetTablesSuccess).payload
                    .reduce((acc, table) => ({ ...acc, [table._id]: table }), state.tables),
                loading: false,
                loaded: true
            }
        case TablesActionsType.GET_TABLE_SUCCESS:
            return {
                ...state,
                tables: (action as GetTableSuccess)
                    ? {
                        ...state.tables, [(action as GetTableSuccess).payload._id]: (action as GetTableSuccess).payload
                    }
                    : state.tables,
                loading: false,
                loaded: true
            }
        case TablesActionsType.CREATE_TABLE_SUCCESS:
            return {
                ...state,
                tables: {
                    ...state.tables, [(action as CreateTableSuccess).payload._id]: (action as CreateTableSuccess).payload
                },
                loading: false,
                loaded: true,
                selected: (action as CreateTableSuccess).payload._id
            }
        case TablesActionsType.UPDATE_TABLE_SUCCESS:
            return {
                ...state,
                tables: {
                    ...state.tables,
                    [(action as UpdateTableSuccess).payload._id]:
                    {
                        ...state.tables[(action as UpdateTableSuccess).payload._id],
                        ...(action as UpdateTableSuccess).payload.edited
                    }
                },
                loading: false,
                loaded: true
            }
        case TablesActionsType.DELETE_TABLE_SUCCESS:
            return {
                ...state,
                tables: Object.keys(state.tables)
                    .filter(key => key !== (action as DeleteTableSuccess).payload)
                    .reduce((acc, key) => ({ ...acc, [key]: state.tables[key] }), {}),
                loading: false,
                loaded: true
            }
        case TablesActionsType.CREATE_TABLE_COLUMN_SUCCESS:
            return {
                ...state,
                tables: Object.keys(state.tables)
                    .map(key => {
                        let columns: TableColumn[] = state.tables[key].columns;
                        if (key === (action as CreateTableColumnSuccess).payload._id) {
                            columns = [...columns, (action as CreateTableColumnSuccess).payload.column];
                        }
                        return { ...state.tables[key], columns };
                    })
                    .reduce((acc, table) => ({ ...acc, [table._id]: table }), {}),
                loading: false,
                loaded: true
            }
        case TablesActionsType.UPDATE_TABLE_COLUMN_SUCCESS:
            return {
                ...state,
                tables: Object.keys(state.tables)
                    .map(key => {
                        let columns: TableColumn[] = state.tables[key].columns;
                        let rows: TableRow[] = state.tables[key].rows;
                        if (key === (action as UpdateTableColumnSuccess).payload._id) {
                            columns = columns.map(c => {
                                if (c._id == (action as UpdateTableColumnSuccess).payload.column._id) {
                                    rows = rows.map(r => {
                                        const value = (r as any)[c.name];
                                        return {
                                            ...r,
                                            [c.name]: undefined,
                                            [(action as UpdateTableColumnSuccess).payload.column.name]: value
                                        };
                                    });
                                    c = (action as UpdateTableColumnSuccess).payload.column;
                                }
                                return c;
                            });
                        }
                        return { ...state.tables[key], columns, rows };
                    })
                    .reduce((acc, table) => ({ ...acc, [table._id]: table }), {}),
                loading: false,
                loaded: true
            }
        case TablesActionsType.CLONE_TABLE_COLUMN_SUCCESS:
            return {
                ...state,
                tables: {
                    ...state.tables, [(action as CloneTableColumnSuccess).payload._id]: (action as CloneTableColumnSuccess).payload
                },
                loading: false,
                loaded: true
            }
        case TablesActionsType.DELETE_TABLE_COLUMN_SUCCESS:
            return {
                ...state,
                tables: Object.keys(state.tables)
                    .map(key => {
                        let columns: TableColumn[] = state.tables[key].columns;
                        if (key === (action as DeleteTableColumnSuccess).payload._id) {
                            columns = columns.filter(c => {
                                return c._id !== (action as DeleteTableColumnSuccess).payload.column_id;
                            });
                        }
                        return { ...state.tables[key], columns };
                    })
                    .reduce((acc, table) => ({ ...acc, [table._id]: table }), {}),
                loading: false,
                loaded: true
            }
        case TablesActionsType.CREATE_TABLE_ROW_SUCCESS:
            return {
                ...state,
                tables: Object.keys(state.tables)
                    .map(key => {
                        let rows: TableRow[] = state.tables[key].rows;
                        if (key === (action as CreateTableRowSuccess).payload._id) {
                            rows = [...rows, (action as CreateTableRowSuccess).payload.row];
                        }
                        return { ...state.tables[key], rows };
                    })
                    .reduce((acc, table) => ({ ...acc, [table._id]: table }), {}),
                loading: false,
                loaded: true
            }
        case TablesActionsType.UPDATE_TABLE_ROW_SUCCESS:
            return {
                ...state,
                tables: Object.keys(state.tables)
                    .map(key => {
                        let rows: TableRow[] = state.tables[key].rows;
                        if (key === (action as UpdateTableRowSuccess).payload._id) {
                            rows = rows
                                .map(r => {
                                    if (r.r_id === (action as UpdateTableRowSuccess).payload.row.r_id) {
                                        r = (action as UpdateTableRowSuccess).payload.row;
                                    }
                                    return r;
                                });
                        }
                        return { ...state.tables[key], rows };
                    })
                    .reduce((acc, table) => ({ ...acc, [table._id]: table }), {}),
                loading: false,
                loaded: true
            }
        case TablesActionsType.DELETE_TABLE_ROW_SUCCESS:
            return {
                ...state,
                tables: Object.keys(state.tables)
                    .map(key => {
                        let rows: TableRow[] = state.tables[key].rows;
                        if (key === (action as DeleteTableRowSuccess).payload._id) {
                            rows = rows.filter(r =>
                                r.r_id !== (action as DeleteTableRowSuccess).payload.row_id
                            );
                        }
                        return { ...state.tables[key], rows };
                    })
                    .reduce((acc, table) => ({ ...acc, [table._id]: table }), {}),
                loading: false,
                loaded: true
            }
        default:
            return state;
    }
}