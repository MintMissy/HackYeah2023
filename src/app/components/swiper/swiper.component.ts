import {
	Component,
	EventEmitter,
	HostListener,
	inject,
	Input,
	OnDestroy,
	OnInit,
	Output,
	Renderer2,
	ViewChild,
	ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperVideoComponent } from './swiper-video/swiper-video.component';

@Component({
	selector: 'app-swiper',
	standalone: true,
	imports: [CommonModule, SwiperVideoComponent],
	templateUrl: './swiper.component.html',
	styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit, OnDestroy {
	@Input() elements: { id: number; src: string }[] = [];
	@Output() loadMoreData = new EventEmitter<void>();
	@ViewChildren(SwiperVideoComponent) videos!: SwiperVideoComponent[];

	renderer = inject(Renderer2);
	index = 0;
	touchStart = 0;
	trackById = (item: any) => item.id;

	private _translateYMove = 0;
	get translateYMove(): number {
		const translate = Math.sign(this._translateYMove) * Math.min(100, Math.abs(this._translateYMove));

		if (!this.previousElement && translate >= 10) {
			return 10;
		}
		if (!this.nextElement && translate <= -10) {
			return -10;
		}

		return translate;
	}

	get previousElement() {
		return this.index > 0;
	}

	get currentElement() {
		return this.elements[this.index];
	}

	get nextElement() {
		return this.index >= this.elements.length ? undefined : this.elements[this.index + 1];
	}

	ngOnInit(): void {
		this.renderer.setStyle(document.body, 'max-height', '100vh');
		this.renderer.setStyle(document.body, 'overflow', 'hidden');
		this.renderer.setStyle(document.getElementsByClassName('phone-container__screen')[0], 'max-height', '100vh');
		this.renderer.setStyle(document.getElementsByClassName('phone-container__screen')[0], 'overflow', 'hidden');
	}

	ngOnDestroy(): void {
		this.renderer.removeStyle(document.body, 'max-height');
		this.renderer.removeStyle(document.body, 'overflow');
		this.renderer.removeStyle(document.getElementsByClassName('phone-container__screen')[0], 'max-height');
		this.renderer.removeStyle(document.getElementsByClassName('phone-container__screen')[0], 'overflow');
	}

	swipePrevious() {
		if (!this.previousElement) return;
		this.index--;
		this.updateVideosPlayState();
	}

	swipeNext() {
		if (!this.nextElement) return;
		this.index++;

		if (!this.nextElement) {
			this.loadMoreData.emit();
		}
		this.updateVideosPlayState();
	}

	@HostListener('touchstart', ['$event'])
	onTouchStart(event: TouchEvent) {
		this.touchStart = event.touches[0].clientY;
	}

	@HostListener('touchmove', ['$event'])
	onTouchMove(event: TouchEvent) {
		const moveDistance = event.touches[0].clientY - this.touchStart;
		this._translateYMove = (moveDistance / window.innerHeight) * 100;
	}

	@HostListener('touchend', ['$event'])
	onTouchEnd() {
		this.touchStart = 0;

		if (Math.abs(this._translateYMove) <= 15) {
			this._translateYMove = 0;
			return;
		}

		if (this._translateYMove < 0) {
			setTimeout(() => {
				this.touchStart = 1;
				this.swipeNext();
				this._translateYMove = 0;
			}, 200);
			this._translateYMove = -100;
		} else {
			setTimeout(() => {
				this.touchStart = 1;
				this.swipePrevious();
				this._translateYMove = 0;
			}, 200);
			this._translateYMove = 100;
		}
	}

	updateVideosPlayState() {
		const { src } = this.elements[this.index];

		this.videos.forEach((video) => {
			if (video.videoSrc === src) {
				video.play();
			} else {
				video.pause();
			}
		});
	}
}
