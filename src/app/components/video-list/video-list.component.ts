import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';

@Component({
	selector: 'app-video-list',
	standalone: true,
	imports: [CommonModule, VideoListItemComponent],
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {}
