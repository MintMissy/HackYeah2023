import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
	selector: 'app-preference-marker',
	standalone: true,
	imports: [CommonModule, IconComponent],
	templateUrl: './preference-marker.component.html',
	styleUrls: ['./preference-marker.component.scss'],
})
export class PreferenceMarkerComponent {
	@Input() leftIcon = '';
	@Input() leftIconActive = '';
	@Input() leftIconType: 'fa' | 'svg' = 'fa';
	@Input() rightIcon = '';
	@Input() primaryValue = -1;
	@Input() compareValue = -1;
	@Input() title = '';
}
