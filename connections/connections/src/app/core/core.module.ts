import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [HeaderComponent, NotFoundPageComponent, ToastMessageComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ToastMessageComponent]
})
export class CoreModule {}
