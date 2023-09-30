import { ChangeDetectorRef, Directive, HostBinding, Input } from '@angular/core';
import { Attidute } from '../models/post.interface';

const filterMap = new Map<Attidute, string>([
	['neutral', 'invert(0.5)'],
	[
		'negative',
		'brightness(0) saturate(100%) invert(99%) sepia(99%) saturate(6%) hue-rotate(122deg) brightness(102%) contrast(104%);',
	],
	[
		'positive',
		'brightness(0) saturate(100%) invert(34%) sepia(37%) saturate(5778%) hue-rotate(344deg) brightness(79%) contrast(96%);',
	],
]);

@Directive({
	selector: '[appSvgColor]',
	standalone: true,
})
export class SvgColorDirective {
	@Input() set attidute(attidute: Attidute) {
		this.colorr = filterMap.get(attidute);
	}

	@HostBinding('style.filter') color?: string;
	@HostBinding('attr.filter') colorr?: string;
}
