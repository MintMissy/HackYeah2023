import {Component, HostBinding, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
import {IconComponent} from "../icon/icon.component";

export interface PoliticianWidget {
  id: string;
	avatarSrc: string;
	firstName: string;
	lastName: string;
}

@Component({
	selector: 'app-politician-widget',
	standalone: true,
	imports: [CommonModule, IconComponent],
	templateUrl: './politician-widget.component.html',
	styleUrls: ['./politician-widget.component.scss'],
})
export class PoliticianWidgetComponent {
	@Input() politicianData: PoliticianWidget = {
		id: '1',
		avatarSrc:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Krzysztof_Kononowicz.JPG/1200px-Krzysztof_Kononowicz.JPG',
		firstName: 'Jacek',
		lastName: 'Pato',
	};

	@Input({ required: true }) state: 'follow' | 'unfollow' = 'unfollow';

	constructor(private router: Router) {}
	navigateToPoliticianProfile() {
		this.router.navigateByUrl(`/profile/politician/${this.politicianData.id}`);
	}
}
