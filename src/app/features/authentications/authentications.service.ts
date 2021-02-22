import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { Authentication, AuthenticationDTO } from "./authentications.model";

@Injectable()
export class AuthenticationService {
  api: string = `${environment.api}/authentications`;

  constructor(
    private http: HttpClient,
  ) { }

  resolve<T>(method: string, endpoint: string, data?: any): Observable<T> {
    let url = `${this.api}/${endpoint}`;

    return this.http.request<T>(method, url, {
      headers: {
        // authorization: `Creeper ${this.authApi.token}`,
        
      },
      body: data
    });
  }

  create(data: AuthenticationDTO) {
    return this.resolve<Authentication>('Post', '', data);
  }
}