import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/env";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  apiUrl = `${environment.apiUrl}/`

  signUp() {
    return this.http.post('', {})
  }

  login() {
    return this.http.get('')
  }
}
