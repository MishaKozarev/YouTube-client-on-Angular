import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { ColorBorder } from '../constants/color-border';
import { DateMock } from '../constants/mock-date';
import { Styles } from '../constants/styles';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {
  @Input() publishAt!: string;

  constructor(
    private elemRef: ElementRef,
    private render2: Renderer2
  ) {}
  ngOnInit(): void {
    let color = '';
    const date: Date = new Date(this.publishAt);
    const daysCount = Math.ceil(
      Math.abs(Date.now() - date.getTime()) / (1000 * 3600 * 24)
    );
    if (daysCount < DateMock.week) {
      color = ColorBorder.blue;
    } else if (daysCount < DateMock.month) {
      color = ColorBorder.green;
    } else if (daysCount < DateMock.halfYear) {
      color = ColorBorder.yellow;
    } else {
      color = ColorBorder.red;
    }
    this.render2.setStyle(
      this.elemRef.nativeElement,
      Styles.borderColor,
      color
    );
  }
}
