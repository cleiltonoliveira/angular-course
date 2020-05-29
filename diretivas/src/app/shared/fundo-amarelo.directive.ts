import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
  // selector: 'p[FundoAmarelo]'
  // selector: 'button[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'yellow');
  }

}
