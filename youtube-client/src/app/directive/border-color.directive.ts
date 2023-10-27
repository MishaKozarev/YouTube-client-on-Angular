import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges
} from '@angular/core';

import { ColorBorder } from '../constants/color-border';
import { DateMock } from '../constants/mock-date';
import { Styles } from '../constants/styles';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnChanges {
  @Input() publishAt!: string;

  constructor(
    private elemRef: ElementRef,
    private render2: Renderer2
  ) {
    this.render2.setStyle(
      this.elemRef.nativeElement,
      Styles.borderColor,
      Styles.empty
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['publishAt']) {
      this.changeBorderColor();
    }
  }
  private addColor(color: string) {
    this.render2.setStyle(
      this.elemRef.nativeElement,
      Styles.borderColor,
      color
    );
  }

  private changeBorderColor() {
    const date: Date = new Date(this.publishAt);
    const daysCount = Math.ceil(
      Math.abs(Date.now() - date.getTime()) / (1000 * 3600 * 24)
    );
    if (daysCount < DateMock.week) {
      this.addColor(ColorBorder.blue);
    } else if (daysCount < DateMock.month) {
      this.addColor(ColorBorder.green);
    } else if (daysCount < DateMock.halfYear) {
      this.addColor(ColorBorder.yellow);
    } else {
      this.addColor(ColorBorder.red);
    }
  }
}
