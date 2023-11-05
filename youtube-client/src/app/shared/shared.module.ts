import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { MaterialModule } from '../material/material.module';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';

@NgModule({
  declarations: [CustomButtonComponent],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  exports: [MaterialModule, CustomButtonComponent]
})
export class SharedModule {}
