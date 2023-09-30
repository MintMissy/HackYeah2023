import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SvgColorDirective } from '../../directives/svg-color.directive';
import {Attidute, AttiduteIcon} from "../../models/post.interface";

@Component({
	selector: 'app-icon-rating',
	standalone: true,
	imports: [CommonModule, SvgIconComponent],
	templateUrl: './icon-rating.component.html',
	styleUrls: ['./icon-rating.component.scss'],
})
export class IconRatingComponent {
	@Input() @HostBinding('class.flex-direction') direction: 'horizontal' | 'vertical' = 'horizontal';
  @Input()set attidute(state: AttiduteIcon) {
    if (state =='positive') {
      this.positiveReaction = true;
      this.negativeReaction = false;
      this.neutralReaction = false;
    }
    else if(state == 'neutral') {
      this.positiveReaction = false;
      this.negativeReaction = false;
      this.neutralReaction = true;
    }
    else if (state == 'negative') {
      this.positiveReaction = false;
      this.negativeReaction = false;
      this.neutralReaction = true;
    }
    else {
      this.positiveReaction = false;
      this.negativeReaction = false;
      this.neutralReaction = false;
    }
  }

  @Output() clickedOption = new EventEmitter<string>();

  positiveReaction = false;
  neutralReaction = false
  negativeReaction = false;

  handleOnClick(value: string) {
    this.clickedOption.emit(value);
  }

}
