import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
import { HttpInterceptorService } from './interceptors/http-interceptor.interceptor';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [HeaderComponent, NotFoundPageComponent, ToastMessageComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ToastMessageComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
