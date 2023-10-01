import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { PostComponent } from './post/post.component';
import { PoliticianProfilePresenter } from './politician-profile.presenter';
import { VotingMarkersComponent } from '../../components/voting-markers/voting-markers.component';
import { Attidute, PostInterface } from '../../models/post.interface';
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'app-politician-profile',
	standalone: true,
	imports: [
		CommonModule,
		ProfileDetailsComponent,
		MatButtonModule,
		MatTabsModule,
		MatIconModule,
		PostComponent,
		VotingMarkersComponent,
	],
	templateUrl: './politician-profile.component.html',
	providers: [],
	styleUrls: ['./politician-profile.component.scss'],
})
export class PoliticianProfileComponent implements OnInit {
	tempUserId: string = '1';
	tempPoliticianId: string = '1';
	posts = this.politicianProfilePresenter.posts;
  politicianData = this.politicianProfilePresenter.politician;
	constructor(private politicianProfilePresenter: PoliticianProfilePresenter, private activatedRoute: ActivatedRoute) {}

	handleReactionUpdate(value: PostInterface) {
		this.politicianProfilePresenter.updatePosts(this.tempUserId, value.postId, value.attitude as Attidute);
	}

	ngOnInit() {
    const prodId = this.activatedRoute.snapshot.paramMap.get('id');
		this.politicianProfilePresenter.getPoliticianPosts(prodId!, this.tempUserId);
		this.politicianProfilePresenter.getPolitician(this.tempUserId, prodId!);
	}
}
