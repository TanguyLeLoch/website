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
  private animation: gsap.core.Tween | null = null;

  @Input() appFadeIn: 'up' | 'down' | 'left' | 'right' | 'none' | '' = 'up';
  @Input() fadeDelay = 0;
  @Input() fadeDuration = 0.8;
  @Input() fadeDistance = 40;
  @Input() fadeBlur = true; // Add blur effect for glass elements

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    gsap.registerPlugin(ScrollTrigger);

    const element = this.el.nativeElement;

    // Set initial state with optional blur for glass effect
    const initialState: gsap.TweenVars = {
      opacity: 0
    };

    if (this.fadeBlur) {
      initialState.filter = 'blur(8px)';
    }

    const direction = this.appFadeIn || 'up';
    switch (direction) {
      case 'up':
        initialState.y = this.fadeDistance;
        break;
      case 'down':
        initialState.y = -this.fadeDistance;
        break;
      case 'left':
        initialState.x = this.fadeDistance;
        break;
      case 'right':
        initialState.x = -this.fadeDistance;
        break;
    }

    gsap.set(element, initialState);

    // Animate to final state
    const toVars: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration: this.fadeDuration,
      delay: this.fadeDelay,
      ease: 'power3.out',
      clearProps: 'transform,filter'
    };

    if (this.fadeBlur) {
      toVars.filter = 'blur(0px)';
    }

    this.animation = gsap.to(element, {
      ...toVars,
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  }

  ngOnDestroy(): void {
    this.scrollTrigger?.kill();
    this.animation?.kill();
  }
}
