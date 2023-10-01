import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Attidute, PostInterface } from '../../models/post.interface';
import {environment} from "../../../environment/env";
import {PoliticianDataInterface} from "../../models/politician-data.interface";

@Injectable()
export class PoliticianProfileService {
	baseUrl = `${environment.apiUrl}`;
	constructor(private http: HttpClient) {}
	getPoliticianPosts(politicianId: string, userId: string) {
		return this.http.get<PostInterface[]>(`${this.baseUrl}/posts/${politicianId}/${userId}`);
	}

	updatePosts(userId: string, postId: string, attidute: Attidute) {
		return this.http.post<PostInterface>(`${this.baseUrl}/posts/${postId}/${userId}/${attidute}`, {});
	}

  getPoliticianDetails(userId: string, politicianId: string) {
    return this.http.get<PoliticianDataInterface>(`${this.baseUrl}/politicians/${politicianId}/${userId}`)
  }
}
