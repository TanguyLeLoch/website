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

  @Input() appStaggerChildren = '> *';
  @Input() staggerDelay = 0.1;
  @Input() staggerDuration = 0.5;
  @Input() staggerDistance = 20;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    gsap.registerPlugin(ScrollTrigger);

    const element = this.el.nativeElement;
    const children = element.querySelectorAll(this.appStaggerChildren);

    if (children.length === 0) return;

    gsap.from(children, {
      opacity: 0,
      y: this.staggerDistance,
      duration: this.staggerDuration,
      stagger: this.staggerDelay,
      ease: 'power2.out',
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
