import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, AppRoutingModule]
})
export class CoreModule {}
