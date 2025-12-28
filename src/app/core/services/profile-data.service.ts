import { Injectable } from '@angular/core';
import { Profile, SocialLink, Service, Experience, Education, Skill, Project } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  readonly profile: Profile = {
    name: 'Tanguy Le Loch',
    jobTitle: 'Developer',
    birthDate: new Date('1997-05-27'),
    location: 'Paris',
    status: 'Freelance',
    profilePicture: 'assets/images/profilePicture.png',
    introText: `Backend developer who knows a bit about frontend. Very attentive to every single optimization to have a more efficient software and a cleaner code. I always keep in mind the customer need to find an appropriate answer to the problem.`,
    resumePdf: 'resume-tanguy-leloch.pdf'
  };

  readonly socialLinks: SocialLink[] = [
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/tanguyleloch/', icon: 'pi pi-linkedin' },
    { platform: 'github', url: 'https://github.com/TanguyLeLoch', icon: 'pi pi-github' }
  ];

  readonly services: Service[] = [
    {
      title: 'Development',
      icon: 'pi pi-code',
      description: 'Building a custom tailored solution based on your technical need.'
    },
    {
      title: 'Unit Test',
      icon: 'pi pi-check-circle',
      description: 'Writing development associated unit tests to ensure a good behavior and avoid any regression in the future.'
    },
    {
      title: 'Documentation',
      icon: 'pi pi-book',
      description: 'Writing the documentation and keep it up to date.'
    }
  ];

  readonly resumeIntro = `Worked professionally for almost 3 years. 1 for the french lottery group FDJ, 1.5 for a BSS running for several digital brand in telecom and utilities industry at triPica, and 4 months as a freelancer for Universign. I mainly develop professionally in Java 17 and the usual java stack, like springboot, hibernate, maven and other tools like openAPI, jenkins and git. I also love the NodeJs stack with NestJs that I use for my side projects.`;

  readonly experiences: Experience[] = [
    {
      dateRange: 'September 2022 - March 2023',
      company: 'Universign',
      location: 'Paris',
      description: 'Backend development as a Freelancer for an electronic signature services. The technology and methodology used were very modern with an hexagonal architecture, DDD, trunk based development, monorepo, microservices... The transactional aspect and the API backward compatibility (for 0 service interruption during deployment) were a very important focused points.'
    },
    {
      dateRange: 'March 2021 - September 2022',
      company: 'triPica',
      location: 'Paris',
      description: 'Backend development for a real-time utilities/telcos BSS platform. Cutting edge stack: Java 17, microservices architecture, AWS server, continuous integration. One quarter of my time is devops activity for debug and fix production issues. First keypoint is the quality of development for having the lowest memory impact to keep a software as efficient as possible. The second keypoint is having a very short time to market.'
    },
    {
      dateRange: 'March 2020 - March 2021',
      company: 'Sopra Steria / FDJ',
      location: 'Aix en Provence',
      description: 'Backend development for a master data management system. Stack is EBX5, Java 8 and the usual Java stack (Spring, maven, hibernate)'
    }
  ];

  readonly education: Education[] = [
    {
      dateRange: '2017 - 2020',
      degree: 'Master Degree',
      institution: 'Seatech - University of Toulon',
      description: 'Master Degree (French Engineering Diploma) specialized in signal processing, data science and IT systems.'
    },
    {
      dateRange: '2014 - 2017',
      degree: 'Bachelor Degree',
      institution: 'University of Rennes',
      description: 'Bachelor Degree about mechanics and engineering science.'
    },
    {
      dateRange: '2011 - 2014',
      degree: 'A Level Degree',
      institution: 'Lycée Yves Thepot',
      description: 'Scientific degree with engineering science option.'
    }
  ];

  readonly skills: Skill[] = [
    // Backend
    { name: 'Java', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg', category: 'backend' },
    { name: 'Spring', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg', category: 'backend' },
    { name: 'Node', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg', category: 'backend' },
    { name: 'MongoDB', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg', category: 'backend' },
    // Frontend
    { name: 'React', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
    { name: 'JavaScript', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
    { name: 'CSS', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg', category: 'frontend' },
    { name: 'HTML', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg', category: 'frontend' },
    // Tools
    { name: 'VSCode', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg', category: 'tools' },
    { name: 'Git', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg', category: 'tools' },
    { name: 'Jenkins', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', category: 'tools' },
    { name: 'IntelliJ', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg', category: 'tools' }
  ];

  readonly sideProjectsIntro = `I use to code for many kind of stuff on my free time. Recently it has been essentially about crypto programming.`;

  readonly projects: Project[] = [
    {
      id: 'grid-trading-bot',
      title: 'Grid Trading Bot',
      slug: 'grid-trading-bot',
      summary: 'The principle of this bot is to take profit of the volatility of the price.',
      features: [
        'Buy when the price goes down',
        'Sell when the price goes up'
      ],
      stack: ['TypeScript', 'NestJS', 'MongoDB', 'VPS deployment', 'microservice architecture'],
      githubUrl: 'https://github.com/TanguyLeLoch/volatility-trading-bot',
      status: 'coming-soon'
    },
    {
      id: 'rm-calculator',
      title: '1 Rep Max Calculator',
      slug: 'rm-calculator',
      summary: 'A fitness tool to calculate your one-rep max and plan your training progression.',
      features: [
        'Calculate 1RM using Brzycki formula',
        'Color-coded results table',
        'Progressive overload planning'
      ],
      stack: ['Angular', 'PrimeNG', 'Tailwind CSS'],
      githubUrl: 'https://github.com/TanguyLeLoch/rm-calculator',
      liveUrl: 'https://rm-calculator.tanguyleloch.com',
      status: 'published'
    }
  ];

  getAge(): number {
    const today = new Date();
    const birth = this.profile.birthDate;
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  getYearsOfExperience(): number {
    return 3;
  }

  getSkillsByCategory(category: 'backend' | 'frontend' | 'tools'): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}
