import { Injectable } from '@angular/core';
import { PoliticianProfileService } from './politician-profile.service';
import { BehaviorSubject } from 'rxjs';
import { Attidute, PostInterface } from '../../models/post.interface';


@Injectable()
export class PoliticianProfilePresenter {
	constructor(private politicianService: PoliticianProfileService) {}

	posts = new BehaviorSubject<null | PostInterface[]>(null);
	getPoliticianPosts(politicianId: string, userId: string) {
		this.politicianService.getPoliticianPosts(politicianId, userId).subscribe((response: PostInterface[]) => {
			this.posts.next(response);
		});
	}

	updatePosts(userId: string, postId: string, attidute: Attidute) {
		// let updatedPost = this.posts.value?.find((post) => post.id === postId);
		// updatedPost!.attidute = attidute;
		// console.log(updatedPost);
		// const updatedArray = [...this.posts.value?.filter((post) => post.id !== postId)!, updatedPost!].sort(
		// 	(a: PostInterface, b: PostInterface) => {
		// 		return a.id < b.id ? -1 : 1;
		// 	},
		// );
		// this.posts.next(updatedArray);
    console.log(userId)
    console.log(postId)
    console.log(attidute)
		this.politicianService.updatePosts(userId, postId, attidute).subscribe((response: PostInterface) => {
      let updatedPost = response;
      const updatedArray = [...this.posts.value?.filter((post) => post.postId !== postId)!, updatedPost!].sort(
        (a: PostInterface, b: PostInterface) => {
          return a.postId < b.postId ? -1 : 1;
        },
      );
      // this.posts.next(updatedArray);
		});
	}
}
