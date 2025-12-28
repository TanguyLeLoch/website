import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Card } from 'primeng/card';
import { ProfileDataService } from '../../../../core/services/profile-data.service';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [Card, FadeInDirective],
  templateUrl: './profile-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCardComponent {
  readonly profileData = inject(ProfileDataService);
}
