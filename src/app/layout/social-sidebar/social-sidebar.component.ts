import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProfileDataService } from '../../core/services/profile-data.service';

@Component({
  selector: 'app-social-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './social-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialSidebarComponent {
  readonly profileData = inject(ProfileDataService);
}
