import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgColorDirective } from '../../directives/svg-color.directive';

@Component({
	selector: 'app-svg-icon',
	standalone: true,
	imports: [],
	templateUrl: './svg-icon.component.html',
	styleUrls: ['./svg-icon.component.scss'],
	hostDirectives: [{ directive: SvgColorDirective, inputs: ['attidute'] }],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
	@Input({ required: true }) iconSrc!: string;
}
