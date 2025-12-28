import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { Button } from 'primeng/button';
import { ProfileDataService } from '../../core/services/profile-data.service';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';
import { HoverScaleDirective } from '../../shared/directives/hover-scale.directive';
import { StaggerChildrenDirective } from '../../shared/directives/stagger-children.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, Card, Tag, Button, FadeInDirective, HoverScaleDirective, StaggerChildrenDirective],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  readonly profileData = inject(ProfileDataService);
}
