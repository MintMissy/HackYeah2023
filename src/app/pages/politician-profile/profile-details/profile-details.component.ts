import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PoliticianDataInterface } from '../../../models/politician-data.interface';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-profile-details',
	standalone: true,
	imports: [NgOptimizedImage, MatChipsModule, MatButtonModule],
	templateUrl: './profile-details.component.html',
	styleUrls: ['./profile-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDetailsComponent {
	@Input() avatar: string = '/assets/stock.png';
	@Input() politicianData: PoliticianDataInterface = {
		id: 1,
		firstName: 'Magdalena',
		lastName: 'Maj',
		party: 'Democrats',
		label: '#Election 2023',
    description: 'Let\'s build a brighter future together! 🇺🇸 #DemocratForChange #ProgressiveValues'
	};
}
