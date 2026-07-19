import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProfileDataService } from '../../core/services/profile-data.service';
import { LucideAngularModule, ArrowUpRight, ArrowDown, Github, Linkedin, FileText } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly profileData = inject(ProfileDataService);

  readonly icons = { arrowUpRight: ArrowUpRight, arrowDown: ArrowDown, github: Github, linkedin: Linkedin, fileText: FileText };

  readonly highlights = [
    { label: 'Experience', value: '5+ years in production' },
    { label: 'Working from', value: 'Bangkok · UTC+7' },
    { label: 'Availability', value: 'Selected freelance work' }
  ];

  readonly proof = [
    {
      metric: '90%',
      title: 'faster development cycles',
      detail: 'Removed a JBoss bottleneck that was slowing down feature delivery for more than 15 engineers.',
      context: 'Transport software'
    },
    {
      metric: '99.99%',
      title: 'API uptime maintained',
      detail: 'Helped evolve registration and transaction services handling more than 50,000 e-signatures every day.',
      context: 'E-signature platform'
    },
    {
      metric: '500k+',
      title: 'customers served',
      detail: 'Built and supported a real-time billing platform while owning production incidents and a major B2B migration.',
      context: 'Telecom platform'
    }
  ];

  readonly services = [
    {
      number: '01',
      title: 'Ship a critical feature',
      description: 'I take ownership across the stack—from domain decisions and Java APIs to the Angular experience—so your roadmap does not stall between teams.'
    },
    {
      number: '02',
      title: 'Untangle a slow platform',
      description: 'I find the constraint that is costing your team time, then simplify the code, architecture, or delivery path around the outcome that matters.'
    },
    {
      number: '03',
      title: 'Strengthen production',
      description: 'I work comfortably in business-critical systems where uptime, migrations, integrations, and clear incident ownership are part of the job.'
    }
  ];

  readonly process = [
    {
      index: '01 / Frame',
      title: 'Define the real constraint',
      description: 'We clarify the user outcome, the technical reality, and what success needs to look like before adding code.'
    },
    {
      index: '02 / Ship',
      title: 'Deliver vertical slices',
      description: 'You see useful software early. Decisions stay close to evidence instead of disappearing into a long implementation phase.'
    },
    {
      index: '03 / Hand over',
      title: 'Leave the team stronger',
      description: 'The result is maintainable by the people who own it next, with the important trade-offs made explicit.'
    }
  ];

  readonly facts = [
    { label: 'Core stack', value: 'Java · Spring · Angular' },
    { label: 'Languages', value: 'French · English' },
    { label: 'Collaboration', value: 'Remote worldwide' }
  ];

  readonly projectKinds: Record<string, string> = {
    ftax: 'On-chain analytics',
    'grid-trading-bot': 'Backend automation',
    'rm-calculator': 'Live web product'
  };

  readonly featuredProjects = this.profileData.projects;
}
