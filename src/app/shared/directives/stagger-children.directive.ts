import { Directive, ElementRef, Input, AfterViewInit, PLATFORM_ID, inject, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appStaggerChildren]',
  standalone: true
})
export class StaggerChildrenDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private scrollTrigger: ScrollTrigger | null = null;
  private animation: gsap.core.Tween | null = null;

  @Input() appStaggerChildren = '> *';
  @Input() staggerDelay = 0.08;
  @Input() staggerDuration = 0.6;
  @Input() staggerDistance = 25;
  @Input() staggerBlur = true; // Add blur for glass effect

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    gsap.registerPlugin(ScrollTrigger);

    const element = this.el.nativeElement;
    const children = element.querySelectorAll(this.appStaggerChildren);

    if (children.length === 0) return;

    // Set initial state
    const initialState: gsap.TweenVars = {
      opacity: 0,
      y: this.staggerDistance
    };

    if (this.staggerBlur) {
      initialState.filter = 'blur(6px)';
    }

    gsap.set(children, initialState);

    // Animate to final state
    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      duration: this.staggerDuration,
      stagger: this.staggerDelay,
      ease: 'power3.out',
      clearProps: 'filter'
    };

    if (this.staggerBlur) {
      toVars.filter = 'blur(0px)';
    }

    this.animation = gsap.to(children, {
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
