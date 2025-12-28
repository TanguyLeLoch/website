import { Directive, ElementRef, HostListener, Input, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Directive({
  selector: '[appHoverScale]',
  standalone: true
})
export class HoverScaleDirective {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  @Input() appHoverScale: number | '' = 1.02;
  @Input() hoverDuration = 0.3;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const scale = this.appHoverScale || 1.02;
    gsap.to(this.el.nativeElement, {
      scale: scale,
      duration: this.hoverDuration,
      ease: 'power2.out'
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    gsap.to(this.el.nativeElement, {
      scale: 1,
      duration: this.hoverDuration,
      ease: 'power2.out'
    });
  }
}
