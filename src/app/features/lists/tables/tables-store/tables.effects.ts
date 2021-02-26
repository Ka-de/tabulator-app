import { Injectable } from "@angular/core";
import { AppState } from "@app/store";
import { AddError, RemoveError } from "@app/store/error/error.action";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { mergeMap, tap, map, catchError } from "rxjs/operators";
import { TablesService } from "../tables.service";
import { CreateTable, CreateTableColumn, CreateTableColumnSuccess, CreateTableRow, CreateTableRowSuccess, CreateTableSuccess, DeleteTable, DeleteTableColumn, DeleteTableColumnSuccess, DeleteTableRow, DeleteTableRowSuccess, DeleteTableSuccess, GetTable, GetTables, GetTablesSuccess, GetTableSuccess, TablesAction, TablesActionsType, UpdateTable, UpdateTableColumn, UpdateTableColumnSuccess, UpdateTableRow, UpdateTableRowSuccess, UpdateTableSuccess } from "./tables.action";

@Injectable()
export class TablesEffects {
    constructor(
        private action$: Actions,
        private tablesService: TablesService,
        private store: Store<AppState>
    ) { }

    @Effect()
    getTables$: Observable<TablesAction> = this.action$.pipe(
        ofType<GetTables>(TablesActionsType.GET_TABLES),
        tap(() => this.store.dispatch(new RemoveError)),
        mergeMap((action: GetTables) => this.tablesService.getTables().pipe(
            map(tables => new GetTablesSuccess(tables)),
            catchError(err => of(new AddError(err.error)))
        ))
    );

    @Effect()
    getTable$: Observable<TablesAction> = this.action$.pipe(
        ofType<GetTable>(TablesActionsType.GET_TABLE),
        tap(() => this.store.dispatch(new RemoveError)),
        mergeMap((action: GetTable) => this.tablesService.getTable(action.payload).pipe(
            map(table => new GetTableSuccess(table)),
            catchError(err => of(new AddError(err.error)))
        ))
    );

    @Effect()
    createTable$: Observable<TablesAction> = this.action$.pipe(
        ofType<CreateTable>(TablesActionsType.CREATE_TABLE),
        tap(() => this.store.dispatch(new RemoveError)),
        mergeMap((action: CreateTable) => this.tablesService.createTable(action.payload).pipe(
            map(table => new CreateTableSuccess(table)),
            catchError(err => of(new AddError(err.error)))
        ))
    );

    @Effect()
    updateTable$: Observable<TablesAction> = this.action$.pipe(
        ofType<UpdateTable>(TablesActionsType.UPDATE_TABLE),
        tap(() => this.store.dispatch(new RemoveError)),
        mergeMap((action: UpdateTable) => this.tablesService.updateTable(action.payload._id, action.payload.data).pipe(
            map(edited => new UpdateTableSuccess({ _id: action.payload._id, edited })),
            catchError(err => of(new AddError(err.error)))
        ))
    );

    @Effect()
    deleteTable$: Observable<TablesAction> = this.action$.pipe(
        ofType<DeleteTable>(TablesActionsType.DELETE_TABLE),
        tap(() => this.store.dispatch(new RemoveError)),
        mergeMap((action: DeleteTable) => this.tablesService.deleteTable(action.payload).pipe(
            map(data => new DeleteTableSuccess(data._id)),
            catchError(err => {
                return of(new AddError(err.error))
            })
        ))
    );

    @Effect()
    createTableColumn$: Observable<TablesAction> = this.action$.pipe(
        ofType<CreateTableColumn>(TablesActionsType.CREATE_TABLE_COLUMN),
        tap(() => this.store.dispatch(new RemoveError)),
        mergeMap((action: CreateTableColumn) => this.tablesService.createTableColumn(action.payload._id, action.payload.data).pipe(
            map(column => new CreateTableColumnSuccess({ _id: action.payload._id, column })),
            catchError(err => of(new AddError(err.error)))
        ))
    );

    @Effect()
    updateTableColumn$: Observable<TablesAction> = this.action$.pipe(
        ofType<UpdateTableColumn>(TablesActionsType.UPDATE_TABLE_COLUMN),
        tap(() => this.store.dispatch(new RemoveError)),
        mergeMap((action: UpdateTableColumn) => this.tablesService.updateTableColumn(action.payload._id, action.payload.column_id, action.payload.data).pipe(
            map(column => new UpdateTableColumnSuccess({ _id: action.payload._id, column })),
            catchError(err => of(new AddError(err.error)))
        ))
    );

    @Effect()
    deleteTableColumn$: Observable<TablesAction> = this.action$.pipe(
        ofType<DeleteTableColumn>(TablesActionsType.DELETE_TABLE_COLUMN),
        tap(() => this.store.dispatch(new RemoveError)),
        mergeMap((action: DeleteTableColumn) => this.tablesService.deleteTableColumn(action.payload._id, action.payload.column_id).pipe(
            map(data => new DeleteTableColumnSuccess({ _id: data._id, column_id: data.column_id })),
            catchError(err => of(new AddError(err.error)))
        ))
    );

    @Effect()
    createTableRow$: Observable<TablesAction> = this.action$.pipe(
        ofType<CreateTableRow>(TablesActionsType.CREATE_TABLE_ROW),
        tap(() => this.store.dispatch(new RemoveError)),
        mergeMap((action: CreateTableRow) => this.tablesService.createTableRow(action.payload._id, action.payload.data).pipe(
            map(row => new CreateTableRowSuccess({ _id: action.payload._id, row })),
            catchError(err => of(new AddError(err.error)))
        ))
    );

    @Effect()
    updateTableRow$: Observable<TablesAction> = this.action$.pipe(
        ofType<UpdateTableRow>(TablesActionsType.UPDATE_TABLE_ROW),
        tap(() => this.store.dispatch(new RemoveError)),
        mergeMap((action: UpdateTableRow) => this.tablesService.updateTableRow(action.payload._id, action.payload.row_id, action.payload.data).pipe(
            map(row => new UpdateTableRowSuccess({ _id: action.payload._id, row })),
            catchError(err => of(new AddError(err.error)))
        ))
    );

    @Effect()
    deleteTableRow$: Observable<TablesAction> = this.action$.pipe(
        ofType<DeleteTableRow>(TablesActionsType.DELETE_TABLE_ROW),
        tap(() => this.store.dispatch(new RemoveError)),
        mergeMap((action: DeleteTableRow) => this.tablesService.deleteTableRow(action.payload._id, action.payload.row_id).pipe(
            map(data => new DeleteTableRowSuccess({ _id: action.payload._id, row_id: data.row_id })),
            catchError(err => of(new AddError(err.error)))
        ))
    );
}