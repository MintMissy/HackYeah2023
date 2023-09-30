import { ChangeDetectorRef, Directive, HostBinding, Input } from '@angular/core';
import { Attidute, AttiduteIcon } from '../models/post.interface';

@Directive({
	selector: '[appSvgColor]',
	standalone: true,
})
export class SvgColorDirective {
	@Input() set attidute(attidute: AttiduteIcon) {
		this.color = `${attidute}-attidute`;
	}

	@HostBinding('class') color?: string;
}
