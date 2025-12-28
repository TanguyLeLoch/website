import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { Divider } from 'primeng/divider';
import { ProfileDataService } from '../../../../core/services/profile-data.service';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';
import { StaggerChildrenDirective } from '../../../../shared/directives/stagger-children.directive';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [Card, Tag, Divider, FadeInDirective, StaggerChildrenDirective],
  templateUrl: './about-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutCardComponent {
  readonly profileData = inject(ProfileDataService);
  
  get headlines(): string[] {
    return [
      `${this.profileData.getAge()} yo`,
      this.profileData.profile.location,
      this.profileData.profile.status
    ];
  }
}
