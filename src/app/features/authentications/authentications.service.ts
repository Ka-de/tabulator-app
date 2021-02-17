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

  create(data: AuthenticationDTO) {
    return this.http.post<Authentication>(this.api, data);
  }
}