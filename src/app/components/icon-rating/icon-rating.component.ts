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
export class IconRatingComponent {
	@ViewChild('icons', { static: false }) ratingIcons!: ElementRef;

	@Input({ required: true }) set direction(value: 'horizontal' | 'vertical') {

	}

  @Input() votes!: {positiveVotes: number, negativeVotes: number, neutralVotes: number};
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

	constructor() {}
}
