import { Injectable } from '@angular/core';
import { Profile, SocialLink, Service, Experience, Education, Skill, Project, Language } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  readonly profile: Profile = {
    name: 'Tanguy Le Loch',
    jobTitle: 'Java / Angular Software Developer',
    birthDate: new Date('1997-05-27'),
    location: 'Bangkok, Thailand',
    status: 'Available',
    profilePicture: 'assets/images/profilePicture.png',
    introText: `I am a software developer with 5 years of experience, specializing in Java particularly with the Spring Framework and proficient in full-stack development using Angular. I thrive on learning new technologies, embracing challenges, and collaborating effectively with my team to drive continuous improvement.`,
    resumePdf: 'resume-tanguy-leloch.pdf',
    email: 'lelochtanguy@gmail.com',
    phone: '+66 96 571 7804',
    website: 'tanguyleloch.com'
  };

  readonly socialLinks: SocialLink[] = [
    { platform: 'email', url: 'mailto:lelochtanguy@gmail.com', icon: 'pi pi-envelope', label: 'lelochtanguy@gmail.com' },
    { platform: 'phone', url: 'tel:+66965717804', icon: 'pi pi-phone', label: '+66 96 571 7804' },
    { platform: 'github', url: 'https://github.com/TanguyLeLoch', icon: 'pi pi-github', label: 'github.com/TanguyLeLoch' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/tanguyleloch/', icon: 'pi pi-linkedin', label: 'linkedin.com/in/tanguyleloch' },
    { platform: 'website', url: 'https://tanguyleloch.com', icon: 'pi pi-globe', label: 'tanguyleloch.com' }
  ];

  readonly services: Service[] = [
    {
      title: 'Backend Development',
      icon: 'pi pi-server',
      description: 'Building robust APIs and services with Java Spring, following DDD and clean architecture principles.'
    },
    {
      title: 'Frontend Development',
      icon: 'pi pi-desktop',
      description: 'Creating modern, responsive user interfaces with Angular, TypeScript, and modern CSS frameworks.'
    },
    {
      title: 'DevOps & CI/CD',
      icon: 'pi pi-cog',
      description: 'Setting up continuous integration pipelines, monitoring, and maintaining production systems.'
    }
  ];

  readonly languages: Language[] = [
    { name: 'French', level: 'Native speaker' },
    { name: 'English', level: 'Fluent' }
  ];

  readonly hobbies: string[] = ['Fitness', 'Cryptocurrencies', 'Investing', 'Programming'];

  readonly resumeIntro = `5 years of professional experience building enterprise applications. Specialized in Java/Spring backend development with expertise in Angular frontend. Experienced with modern methodologies including DDD, TDD, and microservices architecture.`;

  readonly experiences: Experience[] = [
    {
      dateRange: '2023 - Present',
      duration: '1.5 year',
      role: 'Full Stack Developer',
      company: 'Alpega TMS',
      location: 'Khon Kaen / Bangkok, Thailand',
      description: 'Working on a big transportation management system with over 30M LoC, I became a reference for the new Ocean Booking feature. Reduced development cycle time by ~90% through JBoss server optimization for 15+ developers. Collaborated with 20+ developers across 5 international offices. Worked on integration with GLS, INTTRA, and other logistics systems.',
      stack: ['Java 17', 'Angular', 'PL/SQL', 'Oracle DB']
    },
    {
      dateRange: '2022 - 2023',
      duration: '1 year',
      role: 'Backend Developer',
      company: 'Universign',
      location: 'Paris, France',
      description: 'Backend development for an e-signature solution. We used modern techniques like hexagonal architecture, DDD, trunk-based development, and continuous integration with backward-compatible APIs. Maintained 99.99% API uptime while handling 50,000+ daily e-signatures. Part of 2 cross-functional squads (8 developers total) delivering API updates for registration and transaction services.',
      stack: ['Java 8', 'REST', 'Spring', 'MongoDB', 'Maven']
    },
    {
      dateRange: '2021 - 2022',
      duration: '1.5 year',
      role: 'Backend Developer',
      company: 'triPica',
      location: 'Paris, France',
      description: 'Backend development for a real-time utilities/telcos BSS platform serving 500,000+ customers. As developer on-call, maintained 100% SLA compliance while resolving production incidents. Successfully migrated a major B2B customer.',
      stack: ['Java 17', 'OpenAPI V3', 'Spring', 'Hibernate', 'Maven']
    },
    {
      dateRange: '2020 - 2021',
      duration: '1 year',
      role: 'Backend Developer',
      company: 'Sopra Steria',
      location: 'Aix-en-Provence, France',
      description: 'Backend development for a master data management system used as the central piece of one of the largest information systems in France. The information system was so extensive that we had to operate within a SAFe Agile methodology.',
      stack: ['EBX5', 'Java 8', 'Swagger V2', 'Spring', 'Hibernate', 'Maven']
    }
  ];

  readonly education: Education[] = [
    {
      dateRange: '2017 - 2020',
      duration: '3 years',
      degree: "Master's Degree in Engineering",
      institution: 'Seatech - University of Toulon',
      description: 'French Diplôme d\'Ingénieur - Computer science, computer vision, and data science specialization. Main subjects were Java, C++, and MATLAB development, detection, and underwater acoustics. Internship at BU-CROCCS Laboratory in Bangkok on computer vision, working on hand-controlled software.'
    },
    {
      dateRange: '2014 - 2017',
      duration: '3 years',
      degree: "Bachelor's Degree in Science of Engineering",
      institution: 'University of Rennes',
      description: 'Engineering and mechanical specialization.'
    }
  ];

  readonly skills: Skill[] = [
    // Backend
    { name: 'Java', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'backend' },
    { name: 'Spring', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', category: 'backend' },
    { name: 'Hibernate', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg', category: 'backend' },
    { name: 'Maven', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg', category: 'backend' },
    { name: 'Oracle DB', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'backend' },
    { name: 'MongoDB', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'backend' },
    { name: 'NodeJS', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
    // Frontend
    { name: 'JavaScript', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
    { name: 'TypeScript', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend' },
    { name: 'Angular', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', category: 'frontend' },
    { name: 'HTML', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'frontend' },
    { name: 'CSS', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend' },
    // Other
    { name: 'Agile', category: 'other' },
    { name: 'Git', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'other' },
    { name: 'CI/CD', category: 'other' },
    { name: 'TDD', category: 'other' },
    { name: 'DDD', category: 'other' },
    { name: 'SOLID', category: 'other' },
    { name: 'Clean Code', category: 'other' },
    { name: 'Design Patterns', category: 'other' }
  ];

  readonly sideProjectsIntro = `I love coding on my free time. Recently it has been essentially about crypto programming and blockchain technologies.`;

  readonly projects: Project[] = [
    {
      id: 'ftax',
      title: 'Ftax - On-chain Profit Calculator',
      slug: 'ftax',
      summary: 'A tool for calculating profit and losses of on-chain transactions, providing accurate financial insights of blockchain transactions.',
      features: [
        'Calculate PnL from blockchain transactions',
        'Etherscan API integration',
        'Support for multiple chains'
      ],
      stack: ['Java', 'Spring', 'Angular', 'Etherscan API', 'MySQL'],
      githubUrl: 'https://github.com/TanguyLeLoch/ftax',
      status: 'published'
    },
    {
      id: 'grid-trading-bot',
      title: 'Grid Trading Bot',
      slug: 'grid-trading-bot',
      summary: 'The bot uses grid trading to profit from price variations. Running on a VPS with real money, security is a top priority.',
      features: [
        'Grid trading strategy implementation',
        'Real-time price monitoring',
        'Discord notifications'
      ],
      stack: ['NestJS', 'MongoDB', 'NodeJS', 'Binance API', 'Mexc API', 'DiscordJS'],
      githubUrl: 'https://github.com/TanguyLeLoch/volatility-trading-bot',
      status: 'published'
    },
    {
      id: 'front-run-bot',
      title: 'Front Run Trading Bot',
      slug: 'front-run-bot',
      summary: 'A bot that profits by front-running large transactions using the sandwich strategy. Deep dive into mempool dynamics and gas fee mechanics.',
      features: [
        'Mempool monitoring',
        'Sandwich attack strategy',
        'Gas optimization'
      ],
      stack: ['Web3.js', 'NodeJS', 'MongoDB', 'Solidity'],
      status: 'published'
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
    return 5;
  }

  getSkillsByCategory(category: 'backend' | 'frontend' | 'other'): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}
