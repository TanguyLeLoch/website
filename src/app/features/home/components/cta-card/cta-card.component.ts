import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProfileDataService } from '../../../../core/services/profile-data.service';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-cta-card',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './cta-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaCardComponent {
  readonly profileData = inject(ProfileDataService);
}
