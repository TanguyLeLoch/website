import { Directive, ElementRef, Input, AfterViewInit, PLATFORM_ID, inject, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private scrollTrigger: ScrollTrigger | null = null;

  @Input() appFadeIn: 'up' | 'down' | 'left' | 'right' | 'none' | '' = 'up';
  @Input() fadeDelay = 0;
  @Input() fadeDuration = 0.6;
  @Input() fadeDistance = 30;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    gsap.registerPlugin(ScrollTrigger);

    const element = this.el.nativeElement;
    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration: this.fadeDuration,
      delay: this.fadeDelay,
      ease: 'power2.out'
    };

    const direction = this.appFadeIn || 'up';
    switch (direction) {
      case 'up':
        fromVars.y = this.fadeDistance;
        break;
      case 'down':
        fromVars.y = -this.fadeDistance;
        break;
      case 'left':
        fromVars.x = this.fadeDistance;
        break;
      case 'right':
        fromVars.x = -this.fadeDistance;
        break;
    }

    gsap.from(element, {
      ...fromVars,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  }

  ngOnDestroy(): void {
    this.scrollTrigger?.kill();
  }
}
