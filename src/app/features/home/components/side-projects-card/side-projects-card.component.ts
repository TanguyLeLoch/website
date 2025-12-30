import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProfileDataService } from '../../../../core/services/profile-data.service';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';
import { HoverScaleDirective } from '../../../../shared/directives/hover-scale.directive';
import { StaggerChildrenDirective } from '../../../../shared/directives/stagger-children.directive';

@Component({
  selector: 'app-side-projects-card',
  standalone: true,
  imports: [FadeInDirective, HoverScaleDirective, StaggerChildrenDirective],
  templateUrl: './side-projects-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideProjectsCardComponent {
  readonly profileData = inject(ProfileDataService);
}
