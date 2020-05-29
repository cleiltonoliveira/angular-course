import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {


  // will change element background-color on mouse over through mouseenter listener
  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(this._elementRef, 'background-color', 'yellow');

    // Another way
    this.backgroundColor = 'yellow';
  }

  // will change element background-color on mouse over through mouseleave listener
  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setStyle(this._elementRef, 'background-color', 'white');

     // Another way
     this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    // private _elementRef: ElementRef, private _renderer: Renderer2
    ) { }

}
