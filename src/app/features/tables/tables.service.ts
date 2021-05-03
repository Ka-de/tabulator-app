import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ColumnCloneDTO, ColumnDTO } from '../columns/models/tables-column.dto';
import { Column } from '../columns/models/tables-column.model';
import { RowDTO } from '../rows/models/tables-row.dto';
import { Row } from '../rows/models/tables-rows.model';
import { TableDTO } from './models/tables.dto';
import { Table, TableEditable } from './models/tables.model';


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
}