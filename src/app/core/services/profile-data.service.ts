import { Injectable } from '@angular/core';
import { Profile, Project } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileDataService {
  readonly profile: Profile = {
    name: 'Tanguy Le Loch',
    profilePicture: 'assets/images/profilePicture.png',
    resumePdf: 'resume-tanguy-leloch.pdf',
    email: 'lelochtanguy@gmail.com',
    calendlyUrl: 'https://calendly.com/tanguylelochpro/30min'
  };

  readonly projects: Project[] = [
    {
      id: 'ftax',
      title: 'Ftax - On-chain Profit Calculator',
      summary: 'A tool for calculating profit and losses of on-chain transactions, providing accurate financial insights of blockchain transactions.',
      stack: ['Java', 'Spring', 'Angular', 'Etherscan API', 'MySQL'],
      githubUrl: 'https://github.com/TanguyLeLoch/ftax'
    },
    {
      id: 'grid-trading-bot',
      title: 'Grid Trading Bot',
      summary: 'The bot uses grid trading to profit from price variations. Running on a VPS with real money, security is a top priority.',
      stack: ['NestJS', 'MongoDB', 'NodeJS', 'Binance API', 'Mexc API', 'DiscordJS'],
      githubUrl: 'https://github.com/TanguyLeLoch/volatility-trading-bot'
    },
    {
      id: 'rm-calculator',
      title: '1 Rep Max Calculator',
      summary: 'A fitness tool to calculate your one-rep max and plan your training progression.',
      stack: ['Angular', 'PrimeNG', 'Tailwind CSS'],
      githubUrl: 'https://github.com/TanguyLeLoch/rm-calculator',
      liveUrl: 'https://rm-calculator.tanguyleloch.com'
    }
  ];
}
