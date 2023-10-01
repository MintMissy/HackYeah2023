import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PoliticianWidgetComponent} from "../../components/politician-widget/politician-widget.component";

@Component({
	selector: 'app-user-profile',
	standalone: true,
	imports: [CommonModule, PoliticianWidgetComponent],
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {}
