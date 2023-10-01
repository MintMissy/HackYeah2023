import { Injectable } from '@angular/core';
import { PoliticianProfileService } from './politician-profile.service';
import { BehaviorSubject } from 'rxjs';
import { Attidute, PostInterface } from '../models/post.interface';

const mockedPostData: PostInterface[] = [
	{
		id: '1',
		attidute: 'default',
		tag: 'Sugar Tax',
		neutralVotes: 50,
		positiveVotes: 25,
		negativeVotes: 50,
		description:
			'I believe that public health should be a priority, and obesity and diseases related to excessive sugar consumption are a serious health problem. Introducing a sugar tax could help reduce beverage consumption.',
	},
	{
		id: '2',
		attidute: 'default',
		tag: 'Ukrainian migration',
		neutralVotes: 50,
		positiveVotes: 25,
		negativeVotes: 50,
		description:
			'I believe that public health should be a priority, and obesity and diseases related to excessive sugar consumption are a serious health problem. Introducing a sugar tax could help reduce beverage consumption.',
	},
	{
		id: '3',
		attidute: 'default',
		tag: 'Lgbt rights',
		neutralVotes: 50,
		positiveVotes: 25,
		negativeVotes: 50,
		description:
			'I believe that public health should be a priority, and obesity and diseases related to excessive sugar consumption are a serious health problem. Introducing a sugar tax could help reduce beverage consumption.',
	},
	{
		id: '4',
		attidute: 'default',
		tag: '800+',
		neutralVotes: 50,
		positiveVotes: 25,
		negativeVotes: 50,
		description:
			'I believe that public health should be a priority, and obesity and diseases related to excessive sugar consumption are a serious health problem. Introducing a sugar tax could help reduce beverage consumption.',
	},
];

@Injectable()
export class PoliticianProfilePresenter {
	constructor(private politicianService: PoliticianProfileService) {}

	posts = new BehaviorSubject<null | PostInterface[]>(mockedPostData);
	getPoliticianPosts(politicianId: string, userId: string) {
		this.politicianService.getPoliticianPosts(politicianId, userId).subscribe((response: PostInterface[]) => {
			this.posts.next(response);
		});
	}

	updatePosts(userId: string, postId: string, attidute: Attidute) {
		let updatedPost = this.posts.value?.find((post) => post.id === postId);
		updatedPost!.attidute = attidute;
		console.log(updatedPost);
		const updatedArray = [...this.posts.value?.filter((post) => post.id !== postId)!, updatedPost!].sort(
			(a: PostInterface, b: PostInterface) => {
				return a.id < b.id ? -1 : 1;
			},
		);
		this.posts.next(updatedArray);

		// this.politicianService.updatePosts(userId, postId, attidute).subscribe((response: PostInterface) => {
		//   this.posts.next([...this.posts.value?.filter((post) => post.id == response.id )!, response])
		// });
	}
}
