import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/env";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient)
  apiUrl = `${environment.apiUrl}/`

  getUser() {
    return this.http.get('')
  }

  getUsers() {
    return this.http.get('')
  }
}
