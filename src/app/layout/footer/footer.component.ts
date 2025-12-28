import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProfileDataService } from '../../core/services/profile-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly profileData = inject(ProfileDataService);
  readonly currentYear = new Date().getFullYear();
}
