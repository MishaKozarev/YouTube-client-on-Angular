import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';

@NgModule({
  declarations: [CustomButtonComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, CustomButtonComponent]
})
export class SharedModule {}
