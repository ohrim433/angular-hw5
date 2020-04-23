import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({         // decorator
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'silver');
  }
  @HostListener('mouseleave')
  onExit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'white');
  }

}
