import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileDetailsComponent} from "./profile-details/profile-details.component";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {PostComponent} from "./post/post.component";
import {PoliticianProfilePresenter} from "./politician-profile.presenter";
import {PostInterface} from "../models/post.interface";


@Component({
	selector: 'app-politician-profile',
	standalone: true,
	imports: [CommonModule, ProfileDetailsComponent, MatButtonModule, MatTabsModule, MatIconModule, PostComponent],
	templateUrl: './politician-profile.component.html',
  providers: [],
	styleUrls: ['./politician-profile.component.scss'],
})
export class PoliticianProfileComponent {

  constructor(private politicianProfilePresenter: PoliticianProfilePresenter) {
  }
  posts = this.politicianProfilePresenter.posts;

  handleReactionUpdate(value: PostInterface) {
    // updat
  }
}
