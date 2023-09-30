import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { PostInterface } from '../../models/post.interface';
import { MatIconModule } from '@angular/material/icon';
import {IconRatingComponent} from "../../components/icon-rating/icon-rating.component";

@Component({
	selector: 'app-post',
	standalone: true,
	imports: [CommonModule, MatExpansionModule, MatIconModule, IconRatingComponent],
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
})
export class PostComponent {
	@Input({ required: true }) data!: PostInterface;
}
