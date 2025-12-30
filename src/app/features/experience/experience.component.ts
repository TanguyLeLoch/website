import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProfileDataService } from '../../core/services/profile-data.service';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';
import { StaggerChildrenDirective } from '../../shared/directives/stagger-children.directive';
import { HoverScaleDirective } from '../../shared/directives/hover-scale.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FadeInDirective, StaggerChildrenDirective, HoverScaleDirective],
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  readonly profileData = inject(ProfileDataService);

  // Map company types to icons
  getCompanyIcon(company: string): string {
    const icons: Record<string, string> = {
      'Alpega TMS': 'pi pi-truck',
      'Universign': 'pi pi-lock',
      'triPica': 'pi pi-mobile',
      'Sopra Steria': 'pi pi-building'
    };
    return icons[company] || 'pi pi-briefcase';
  }

  // Get accent color for each company
  getCompanyColor(index: number): string {
    const colors = ['bg-teal-500', 'bg-indigo-500', 'bg-violet-500', 'bg-pink-500'];
    return colors[index % colors.length];
  }
}
