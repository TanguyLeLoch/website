import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from 'primeng/button';
import { ThemeService } from '../../core/services/theme.service';
import { ProfileDataService } from '../../core/services/profile-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, Button],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly themeService = inject(ThemeService);
  readonly profileData = inject(ProfileDataService);
  readonly mobileMenuOpen = signal(false);

  readonly menuItems = [
    { label: 'Home', routerLink: '/' },
    { label: 'Projects', routerLink: '/projects' }
  ];

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
