import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileDataService } from '../../core/services/profile-data.service';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';
import { HoverScaleDirective } from '../../shared/directives/hover-scale.directive';
import { StaggerChildrenDirective } from '../../shared/directives/stagger-children.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, FadeInDirective, HoverScaleDirective, StaggerChildrenDirective],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  readonly profileData = inject(ProfileDataService);
}
