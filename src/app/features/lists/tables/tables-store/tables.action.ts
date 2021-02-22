import { Action } from "@ngrx/store";
import { TableColumnDTO } from "../dtos/tables.dto";
import { TableColumn } from "../models/tables-column.model";
import { TableRow } from "../models/tables-rows.model";
import { Table, TableDTO } from "../models/tables.model";

export enum TablesActionsType {
    GET_TABLES = "[TABLES] Get",
    GET_TABLES_SUCCESS = "[TABLES] Get Success",

    GET_TABLE = "[TABLE] Get",
    GET_TABLE_SUCCESS = "[TABLE] Get Success",

    CREATE_TABLE = "[TABLE] Create",
    CREATE_TABLE_SUCCESS = "[TABLE] Create Success",

    UPDATE_TABLE = "[TABLE] Update",
    UPDATE_TABLE_SUCCESS = "[TABLE] Update Success",

    DELETE_TABLE = "[TABLE] Delete",
    DELETE_TABLE_SUCCESS = "[TABLE] Delete Success",

    CREATE_TABLE_COLUMN = "[TABLE_COLUMN] Create",
    CREATE_TABLE_COLUMN_SUCCESS = "[TABLE_COLUMN] Create Success",

    UPDATE_TABLE_COLUMN = "[TABLE_COLUMN] Update",
    UPDATE_TABLE_COLUMN_SUCCESS = "[TABLE_COLUMN] Update Success",

    DELETE_TABLE_COLUMN = "[TABLE_COLUMN] Delete",
    DELETE_TABLE_COLUMN_SUCCESS = "[TABLE_COLUMN] Delete Success",

    CREATE_TABLE_ROW = "[TABLE_ROW] Create",
    CREATE_TABLE_ROW_SUCCESS = "[TABLE_ROW] Create Success",

    UPDATE_TABLE_ROW = "[TABLE_ROW] Update",
    UPDATE_TABLE_ROW_SUCCESS = "[TABLE_ROW] Update Success",

    DELETE_TABLE_ROW = "[TABLE_ROW] Delete",
    DELETE_TABLE_ROW_SUCCESS = "[TABLE_ROW] Delete Success",
}

export class GetTables implements Action {
    readonly type = TablesActionsType.GET_TABLES;
    constructor() { }
}

export class GetTablesSuccess implements Action {
    readonly type = TablesActionsType.GET_TABLES_SUCCESS;
    constructor(public payload: Table[]) { }
}

export class GetTable implements Action {
    readonly type = TablesActionsType.GET_TABLE;
    constructor(public payload: string) { }
}

export class GetTableSuccess implements Action {
    readonly type = TablesActionsType.GET_TABLE_SUCCESS;
    constructor(public payload: Table) { }
}

export class CreateTable implements Action {
    readonly type = TablesActionsType.CREATE_TABLE;
    constructor(public payload: TableDTO) { }
}

export class CreateTableSuccess implements Action {
    readonly type = TablesActionsType.CREATE_TABLE_SUCCESS;
    constructor(public payload: Table) { }
}

export class DeleteTable implements Action {
    readonly type = TablesActionsType.DELETE_TABLE;
    constructor(public payload: string) { }
}

export class DeleteTableSuccess implements Action {
    readonly type = TablesActionsType.DELETE_TABLE_SUCCESS;
    constructor(public payload: Table) { }
}

export class CreateTableColumn implements Action {
    readonly type = TablesActionsType.CREATE_TABLE_COLUMN;
    constructor(public payload: TableColumnDTO) { }
}

export class CreateTableColumnSuccess implements Action {
    readonly type = TablesActionsType.CREATE_TABLE_COLUMN_SUCCESS;
    constructor(public payload: TableColumn) { }
}

export class UpdateTableColumn implements Action {
    readonly type = TablesActionsType.UPDATE_TABLE_COLUMN;
    constructor(public payload: string) { }
}

export class UpdateTableColumnSuccess implements Action {
    readonly type = TablesActionsType.UPDATE_TABLE_COLUMN_SUCCESS;
    constructor(public payload: TableColumn) { }
}

export class DeleteTableColumn implements Action {
    readonly type = TablesActionsType.DELETE_TABLE_COLUMN;
    constructor(public payload: string) { }
}

export class DeleteTableColumnSuccess implements Action {
    readonly type = TablesActionsType.DELETE_TABLE_COLUMN_SUCCESS;
    constructor(public payload: string) { }
}

export class CreateTableRow implements Action {
    readonly type = TablesActionsType.CREATE_TABLE_ROW;
    constructor(public payload: string) { }
}

export class CreateTableRowSuccess implements Action {
    readonly type = TablesActionsType.CREATE_TABLE_ROW_SUCCESS;
    constructor(public payload: TableRow) { }
}

export class UpdateTableRow implements Action {
    readonly type = TablesActionsType.UPDATE_TABLE_ROW;
    constructor(public payload: string) { }
}

export class UpdateTableRowSuccess implements Action {
    readonly type = TablesActionsType.UPDATE_TABLE_ROW_SUCCESS;
    constructor(public payload: TableRow) { }
}

export class DeleteTableRow implements Action {
    readonly type = TablesActionsType.DELETE_TABLE_ROW;
    constructor(public payload: string) { }
}

export class DeleteTableRowSuccess implements Action {
    readonly type = TablesActionsType.DELETE_TABLE_ROW_SUCCESS;
    constructor(public payload: string) { }
}

export type TablesAction = Action;