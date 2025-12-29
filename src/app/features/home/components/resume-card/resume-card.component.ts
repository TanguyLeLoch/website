import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileDataService } from '../../../../core/services/profile-data.service';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';
import { StaggerChildrenDirective } from '../../../../shared/directives/stagger-children.directive';
import { HoverScaleDirective } from '../../../../shared/directives/hover-scale.directive';

@Component({
  selector: 'app-resume-card',
  standalone: true,
  imports: [RouterLink, FadeInDirective, StaggerChildrenDirective, HoverScaleDirective],
  templateUrl: './resume-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeCardComponent {
  readonly profileData = inject(ProfileDataService);
  
  get headlines(): string[] {
    return [
      `${this.profileData.getYearsOfExperience()} years experience`,
      "Master's degree"
    ];
  }

  get backendSkills() {
    return this.profileData.getSkillsByCategory('backend');
  }

  get frontendSkills() {
    return this.profileData.getSkillsByCategory('frontend');
  }

  get otherSkills() {
    return this.profileData.getSkillsByCategory('other');
  }
}
