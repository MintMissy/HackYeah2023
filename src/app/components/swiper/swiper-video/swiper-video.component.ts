import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-swiper-video',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './swiper-video.component.html',
	styleUrls: ['./swiper-video.component.scss'],
})
export class SwiperVideoComponent {
	@Input() videoSrc = '';
	@ViewChild('video') video!: ElementRef<HTMLVideoElement>;

	play() {
		this.video.nativeElement.play();
	}

	pause() {
		this.video.nativeElement.pause();
	}
}
