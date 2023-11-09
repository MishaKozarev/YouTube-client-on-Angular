import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { BorderColorDirective } from './directives/border-color.directive';

@NgModule({
  declarations: [CustomButtonComponent, BorderColorDirective],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, CustomButtonComponent, BorderColorDirective]
})
export class SharedModule {}
