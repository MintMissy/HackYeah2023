import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {PostInterface} from "../models/post.interface";

@Injectable()
export class PoliticianProfileService {

  baseUrl = 'localhost:8000/api'
  constructor(private http: HttpClient) {
  }
  getPoliticianPosts(politicianId: number, userId: number) {
    const httpParams = new HttpParams();
    httpParams.set('politicianId', politicianId);
    return this.http.get<PostInterface[]>(`${this.baseUrl}/${userId}`, { params: httpParams });
  }
}
