import { Directive, ElementRef, Input, AfterViewInit, PLATFORM_ID, inject, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * GSAP directive for glass reveal animation effect.
 * Animates glass elements with a frosted glass appearance reveal.
 */
@Directive({
  selector: '[appGlassReveal]',
  standalone: true
})
export class GlassRevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private scrollTrigger: ScrollTrigger | null = null;
  private animation: gsap.core.Tween | null = null;

  @Input() glassDelay = 0;
  @Input() glassDuration = 0.8;
  @Input() glassDirection: 'up' | 'down' | 'left' | 'right' | 'scale' = 'up';

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    gsap.registerPlugin(ScrollTrigger);

    const element = this.el.nativeElement;
    
    // Initial state
    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration: this.glassDuration,
      delay: this.glassDelay,
      ease: 'power3.out',
      clearProps: 'all'
    };

    // Add blur animation for glass effect
    gsap.set(element, {
      filter: 'blur(10px)',
      opacity: 0
    });

    switch (this.glassDirection) {
      case 'up':
        fromVars.y = 40;
        break;
      case 'down':
        fromVars.y = -40;
        break;
      case 'left':
        fromVars.x = 40;
        break;
      case 'right':
        fromVars.x = -40;
        break;
      case 'scale':
        fromVars.scale = 0.9;
        break;
    }

    this.animation = gsap.to(element, {
      ...fromVars,
      opacity: 1,
      filter: 'blur(0px)',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  }

  ngOnDestroy(): void {
    this.scrollTrigger?.kill();
    this.animation?.kill();
  }
}
