import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { ResumeCardComponent } from './components/resume-card/resume-card.component';
import { SideProjectsCardComponent } from './components/side-projects-card/side-projects-card.component';
import { CtaCardComponent } from './components/cta-card/cta-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileCardComponent, AboutCardComponent, ResumeCardComponent, SideProjectsCardComponent, CtaCardComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
