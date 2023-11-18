import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    FilterComponent,
    HeaderComponent,
    NotFoundComponent,
    AdminPageComponent
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule, ReactiveFormsModule],
  exports: [HeaderComponent]
})
export class CoreModule {}
