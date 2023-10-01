import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferenceMarkerComponent } from '../preference-marker/preference-marker.component';

@Component({
	selector: 'app-voting-markers',
	standalone: true,
	imports: [CommonModule, PreferenceMarkerComponent],
	templateUrl: './voting-markers.component.html',
	styleUrls: ['./voting-markers.component.scss'],
})
export class VotingMarkersComponent {}
