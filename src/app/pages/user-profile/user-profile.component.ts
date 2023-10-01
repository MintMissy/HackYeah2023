import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	PoliticianWidget,
	PoliticianWidgetComponent,
} from '../../components/politician-widget/politician-widget.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { PostComponent } from '../politician-profile/post/post.component';
import { ProfileDetailsComponent } from '../politician-profile/profile-details/profile-details.component';
import { VideoListComponent } from '../../components/video-list/video-list.component';
import { VotingMarkersComponent } from '../../components/voting-markers/voting-markers.component';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
	selector: 'app-user-profile',
	standalone: true,
	imports: [
		CommonModule,
		PoliticianWidgetComponent,
		MatIconModule,
		MatTabsModule,
		PostComponent,
		ProfileDetailsComponent,
		VideoListComponent,
		VotingMarkersComponent,
		IconComponent,
	],
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
	politicianData: PoliticianWidget[] = [
		{
			id: '1',
			avatarSrc:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Krzysztof_Kononowicz.JPG/1200px-Krzysztof_Kononowicz.JPG',
			firstName: 'Jacek',
			lastName: 'Pato',
		},
		{
			id: '1',
			avatarSrc:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Krzysztof_Kononowicz.JPG/1200px-Krzysztof_Kononowicz.JPG',
			firstName: 'Jacek',
			lastName: 'Pato',
		},
		{
			id: '1',
			avatarSrc:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Krzysztof_Kononowicz.JPG/1200px-Krzysztof_Kononowicz.JPG',
			firstName: 'John',
			lastName: 'Doe',
		},
		{
			id: '1',
			avatarSrc:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Krzysztof_Kononowicz.JPG/1200px-Krzysztof_Kononowicz.JPG',
			firstName: 'Mark',
			lastName: 'Newman',
		},
	];
}
