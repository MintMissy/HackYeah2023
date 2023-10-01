import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from '../../components/swiper/swiper.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, SwiperComponent],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	elements = [
		{ id: 1, src: '/assets/mocks/video1.mp4' },
		{ id: 2, src: '/assets/mocks/video2.mp4' },
		{ id: 3, src: '/assets/mocks/video3.mp4' },
		{ id: 4, src: '/assets/mocks/video1.mp4' },
		{ id: 5, src: '/assets/mocks/video2.mp4' },
	];
}
