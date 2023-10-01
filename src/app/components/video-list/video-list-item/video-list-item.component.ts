import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../icon/icon.component';

@Component({
	selector: 'app-video-list-item',
	standalone: true,
	imports: [CommonModule, IconComponent],
	templateUrl: './video-list-item.component.html',
	styleUrls: ['./video-list-item.component.scss'],
})
export class VideoListItemComponent {
	@Input() src = '';
	@Input() views = 0;
}
