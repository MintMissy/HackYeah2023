import { Injectable } from '@angular/core';
import { PoliticianProfileService } from './politician-profile.service';
import { BehaviorSubject } from 'rxjs';
import { Attidute, PostInterface } from '../../models/post.interface';
import {PoliticianDataInterface} from "../../models/politician-data.interface";


@Injectable()
export class PoliticianProfilePresenter {
	constructor(private politicianService: PoliticianProfileService) {}
  politician = new BehaviorSubject<null | PoliticianDataInterface>(null)
  posts = new BehaviorSubject<null | PostInterface[]>(null);
	getPoliticianPosts(politicianId: string, userId: string) {
		this.politicianService.getPoliticianPosts(politicianId, userId).subscribe((response: PostInterface[]) => {
			this.posts.next(response);
		});
	}

  getPolitician(userId: string, politicalId: string) {
    this.politicianService.getPoliticianDetails(userId, politicalId).subscribe((response: PoliticianDataInterface) => {
      this.politician.next(response);
    })
  }

	updatePosts(userId: string, postId: string, attidute: Attidute) {
		this.politicianService.updatePosts(userId, postId, attidute).subscribe((response: PostInterface) => {
      let updatedPost = response;
      const updatedArray = [...this.posts.value?.filter((post) => post.postId !== postId)!, updatedPost!].sort(
        (a: PostInterface, b: PostInterface) => {
          return a.postId < b.postId ? -1 : 1;
        },
      );
      this.posts.next(updatedArray);
		});
	}


}
