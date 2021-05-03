import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Table } from '../tables/models/tables.model';
import { ColumnCloneDTO, ColumnDTO } from './models/tables-column.dto';
import { Column } from './models/tables-column.model';

@Injectable()
export class ColumnService {
  api = `${environment.api}/columns`;

  constructor(
    private http: HttpClient
  ) { }

  //process the requests
  private request<T>(method: string, endpoint: string, data?: any) {
    const url = `${this.api}${endpoint}`;
    return this.http.request<T>(method.toUpperCase(), url, {
      body: data
    });
  }

  createColumn(table: string, data: ColumnDTO) {
    return this.request<Column>('post', `?table=${table}`, data);
  }

  updateColumn(table: string, _id: string, data: Partial<ColumnDTO>) {
    return this.request<Column>('patch', `/${_id}?table=${table}`, data);
  }

  cloneColumn(table: string, data: Partial<ColumnCloneDTO>) {
    console.log(table);
    
    return this.request<Table>('put', `?table=${table}`, data);
  }

  deleteColumn(table: string, _id: string) {
    return this.request<any>('delete', `/${_id}?table=${table}`);
  }
}
