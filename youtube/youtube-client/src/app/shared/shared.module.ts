import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
<<<<<<< HEAD
import { CardIconComponent } from './components/card-icon/card-icon.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { BorderColorDirective } from './directives/border-color.directive';

@NgModule({
  declarations: [
    CustomButtonComponent,
    BorderColorDirective,
    SearchItemComponent,
    CardIconComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    CustomButtonComponent,
    BorderColorDirective,
    SearchItemComponent,
    CardIconComponent
  ]
=======
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { BorderColorDirective } from './directives/border-color.directive';

@NgModule({
  declarations: [CustomButtonComponent, BorderColorDirective],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, CustomButtonComponent, BorderColorDirective]
>>>>>>> main
})
export class SharedModule {}
