import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { Button } from 'primeng/button';
import { ProfileDataService } from '../../../../core/services/profile-data.service';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';
import { HoverScaleDirective } from '../../../../shared/directives/hover-scale.directive';

@Component({
  selector: 'app-side-projects-card',
  standalone: true,
  imports: [Card, Tag, Button, FadeInDirective, HoverScaleDirective],
  templateUrl: './side-projects-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideProjectsCardComponent {
  readonly profileData = inject(ProfileDataService);
}
