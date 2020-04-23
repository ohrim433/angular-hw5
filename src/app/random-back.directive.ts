import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRandomBack]'
})
export class RandomBackDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;

    this.renderer.setStyle(this.elementRef.nativeElement, 'background', `rgb(${red},${green},${blue})`);
  }

}
