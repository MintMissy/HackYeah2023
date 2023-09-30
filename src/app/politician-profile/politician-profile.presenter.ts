import { Injectable } from '@angular/core';
import { PoliticianProfileService } from './politician-profile.service';
import { BehaviorSubject } from 'rxjs';
import { PostInterface } from '../models/post.interface';

const mockedPostData: PostInterface[] = [{
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
  }]

@Injectable()
export class PoliticianProfilePresenter {
	constructor(private politicianService: PoliticianProfileService) {}

	posts = new BehaviorSubject<null | PostInterface[]>(mockedPostData);
	getPoliticianPosts(politicianId: number, userId: number) {
		this.politicianService.getPoliticianPosts(politicianId, userId).subscribe((response: PostInterface[]) => {
      this.posts.next(response);
    });
	}

  updatePosts() {

  }
}
