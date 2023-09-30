import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileDetailsComponent} from "./profile-details/profile-details.component";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {PostComponent} from "./post/post.component";
import {PostInterface} from "../models/post.interface";

@Component({
	selector: 'app-politician-profile',
	standalone: true,
	imports: [CommonModule, ProfileDetailsComponent, MatButtonModule, MatTabsModule, MatIconModule, PostComponent],
	templateUrl: './politician-profile.component.html',
	styleUrls: ['./politician-profile.component.scss'],
})
export class PoliticianProfileComponent {

  posts: PostInterface[] = [{
    attidute: 'positive',
    title: 'Sugar Tax',
    neutralVotes: 50,
    positiveVotes: 25,
    negativeVotes: 50,
    description:
      'I believe that public health should be a priority, and obesity and diseases related to excessive sugar consumption are a serious health problem. Introducing a sugar tax could help reduce beverage consumption.',
  },
    {
      attidute: 'positive',
      title: 'Ukrainian migration',
      neutralVotes: 50,
      positiveVotes: 25,
      negativeVotes: 50,
      description:
        'I believe that public health should be a priority, and obesity and diseases related to excessive sugar consumption are a serious health problem. Introducing a sugar tax could help reduce beverage consumption.',
    },
    {
      attidute: 'neutral',
      title: 'Lgbt rights',
      neutralVotes: 50,
      positiveVotes: 25,
      negativeVotes: 50,
      description:
        'I believe that public health should be a priority, and obesity and diseases related to excessive sugar consumption are a serious health problem. Introducing a sugar tax could help reduce beverage consumption.',
    },
    {
      attidute: 'negative',
      title: '800+',
      neutralVotes: 50,
      positiveVotes: 25,
      negativeVotes: 50,
      description:
        'I believe that public health should be a priority, and obesity and diseases related to excessive sugar consumption are a serious health problem. Introducing a sugar tax could help reduce beverage consumption.',
    }]
}
