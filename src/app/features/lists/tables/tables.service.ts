import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { TableRowDTO } from './dtos/tables-row.dto';
import { TableColumnDTO } from './dtos/tables.dto';
import { TableColumn } from './models/tables-column.model';
import { TableRow } from './models/tables-rows.model';
import { Table, TableDTO, TableEditable } from './models/tables.model';

@Injectable()
export class TablesService {
  api = `${environment.api}/tables`;

  constructor(
    private http: HttpClient
  ) { }

  //process the requests
  private request<T>(method: string, endpoint: string, data?: any) {
    const url = `${this.api}/${endpoint}`;
    return this.http.request<T>(method.toUpperCase(), url, {
      headers: {
        Authentication: localStorage.token || 's'
      },
      body: data
    });
  }

  getTables() {
    return this.request<Table[]>('get', '');
  }

  getTable(_id: string) {
    return this.request<Table>('get', _id);
  }

  createTable(data: TableDTO) {
    return this.request<Table>('post', '', data);
  }

  updateTable(_id: string, data: Partial<TableEditable>) {
    return this.request<Partial<TableEditable>>('patch', _id, data);
  }

  deleteTable(_id: string) {
    return this.request<any>('delete', _id);
  }

  createTableColumn(_id: string, data: TableColumnDTO) {
    return this.request<TableColumn>('post', `${_id}/columns`, data);
  }

  updateTableColumn(_id: string, column_id: string, data: Partial<TableColumnDTO>) {
    return this.request<TableColumn>('patch', `${_id}/columns/${column_id}`, data);
  }

  deleteTableColumn(_id: string, column_id: string) {
    return this.request<any>('delete', `${_id}/columns/${column_id}`);
  }

  createTableRow(_id: string, data: TableRowDTO) {
    return this.request<TableRow>('post', `${_id}/rows`, data);
  }

  updateTableRow(_id: string, row_id: string, data: Partial<TableRowDTO>) {
    return this.request<TableRow>('patch', `${_id}/rows/${row_id}`, data);
  }

  deleteTableRow(_id: string, row_id: string) {
    return this.request<any>('delete', `${_id}/rows/${row_id}`);
  }
}
