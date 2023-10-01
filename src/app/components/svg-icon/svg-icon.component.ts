import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { SvgColorDirective } from '../../directives/svg-color.directive';
import { AttiduteIcon } from '../../models/post.interface';

@Component({
	selector: 'app-svg-icon',
	standalone: true,
	imports: [],
	templateUrl: './svg-icon.component.html',
	styleUrls: ['./svg-icon.component.scss'],
	hostDirectives: [{ directive: SvgColorDirective, inputs: ['attitude'] }],
})
export class SvgIconComponent {
	@Input({ required: true }) iconName!: string;
	@Input() attidute: AttiduteIcon = 'default';
  @Output() onClick = new EventEmitter();

  baseSrc = './assets/icons/'
	get icon() {
    return this.attidute !== 'default' ?  `${this.baseSrc}${this.iconName}.svg` : `${this.baseSrc}default-${this.iconName}.svg`
  }
}
