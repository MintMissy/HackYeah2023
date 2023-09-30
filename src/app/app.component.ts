import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	elements = [
		{ id: 1, src: '/assets/mocks/video1.mp4' },
		{ id: 2, src: '/assets/mocks/video2.mp4' },
		{ id: 3, src: '/assets/mocks/video3.mp4' },
		{ id: 4, src: '/assets/mocks/video1.mp4' },
		{ id: 5, src: '/assets/mocks/video2.mp4' },
	];
}
