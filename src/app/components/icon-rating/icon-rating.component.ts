import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	HostBinding,
	Input,
	Output,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SvgColorDirective } from '../../directives/svg-color.directive';
import { Attidute, AttiduteIcon } from '../../models/post.interface';

@Component({
	selector: 'app-icon-rating',
	standalone: true,
	imports: [CommonModule, SvgIconComponent],
	templateUrl: './icon-rating.component.html',
	styleUrls: ['./icon-rating.component.scss'],
})
export class IconRatingComponent implements AfterViewInit {
	// @Input() @HostBinding('class.flex-direction') direction: 'horizontal' | 'vertical' = 'vertical';
	@ViewChild('icons', { static: false }) ratingIcons!: ElementRef;

	@Input({ required: true }) set direction(value: 'horizontal' | 'vertical') {
    setTimeout(() => {
      const nativeElement = this.ratingIcons.nativeElement;
      this.renderer.setStyle(nativeElement, 'flex-direction', value);
    }, 100)
	}
	@Input() set attidute(state: AttiduteIcon) {
		if (state == 'positive') {
			this.positiveReaction = true;
			this.negativeReaction = false;
			this.neutralReaction = false;
		} else if (state == 'neutral') {
			this.positiveReaction = false;
			this.negativeReaction = false;
			this.neutralReaction = true;
		} else if (state == 'negative') {
			this.positiveReaction = false;
			this.negativeReaction = true;
			this.neutralReaction = false;
		} else {
			this.positiveReaction = false;
			this.negativeReaction = false;
			this.neutralReaction = false;
		}
	}

	@Output() clickedOption = new EventEmitter<string>();

	positiveReaction = false;
	neutralReaction = false;
	negativeReaction = false;

	handleOnClick(value: string) {
		this.clickedOption.emit(value);
	}

	ngAfterViewInit() {
		const nativeElement = this.ratingIcons.nativeElement;
	}

	constructor(private renderer: Renderer2) {}
}
