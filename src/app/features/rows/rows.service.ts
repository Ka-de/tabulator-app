import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { RowDTO } from '../rows/models/tables-row.dto';
import { Row } from '../rows/models/tables-rows.model';


@Injectable()
export class RowService {
  api = `${environment.api}/rows`;

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

  createRow(table: string, data: RowDTO) {
    return this.request<Row>('post', `?table=${table}`, data);
  }

  updateRow(table: string, _id: string, data: Partial<RowDTO>) {
    return this.request<Row>('patch', `/${_id}?table=${table}`, data);
  }

  deleteRow(table: string, _id: string) {
    return this.request<any>('delete', `/${_id}?table=${table}`);
  }
}
