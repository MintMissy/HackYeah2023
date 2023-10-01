import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import { PoliticianDataInterface } from '../../../models/politician-data.interface';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-profile-details',
	standalone: true,
	imports: [NgOptimizedImage, MatChipsModule, MatButtonModule, NgIf],
	templateUrl: './profile-details.component.html',
	styleUrls: ['./profile-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDetailsComponent {
	@Input() avatar: string = '/assets/stock.png';
	@Input() politicianData!: PoliticianDataInterface | null;

  get profileSrc() {
    console.log(`${this.politicianData?.profilePhotoPath}`)
    return `https://projecthackathon.s3.eu-central-1.amazonaws.com${this.politicianData?.profilePhotoPath}`
  }

  get backgroundSrc() {
    return `https://projecthackathon.s3.eu-central-1.amazonaws.com${this.politicianData?.backgroundPhotoPath}`
  }
}
