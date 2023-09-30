import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SvgColorDirective } from '../../directives/svg-color.directive';

@Component({
	selector: 'app-icon-rating',
	standalone: true,
	imports: [CommonModule, SvgIconComponent],
	templateUrl: './icon-rating.component.html',
	styleUrls: ['./icon-rating.component.scss'],
})
export class IconRatingComponent {
	@Input() @HostBinding('class.flex-direction') direction: 'horizontal' | 'vertical' = 'horizontal';
}
