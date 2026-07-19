import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProfileDataService } from '../../core/services/profile-data.service';
import { LucideAngularModule, Github, Linkedin, Mail } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly profileData = inject(ProfileDataService);
  readonly currentYear = new Date().getFullYear();
  readonly icons = { github: Github, linkedin: Linkedin, mail: Mail };
}
