import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [FilterComponent, HeaderComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [HeaderComponent]
})
export class CoreModule {}
