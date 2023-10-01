import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Attidute, PostInterface } from '../../models/post.interface';
import {environment} from "../../../environment/env";

@Injectable()
export class PoliticianProfileService {
	baseUrl = `${environment.apiUrl}/posts`;
	constructor(private http: HttpClient) {}
	getPoliticianPosts(politicianId: string, userId: string) {
		return this.http.get<PostInterface[]>(`${this.baseUrl}/${politicianId}/${userId}`);
	}

	updatePosts(userId: string, postId: string, attidute: Attidute) {
		return this.http.post<PostInterface>(`${this.baseUrl}/${postId}/${userId}/${attidute}`, {});
	}
}
