import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ProfileEffects } from '../store/effects/profile.effect';
import { profileReducer } from '../store/reducers/profile.reducer';
import { HeaderComponent } from './components/header/header.component';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
import { HttpInterceptorService } from './interceptors/http-interceptor.interceptor';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundPageComponent,
    ToastMessageComponent,
    ProfilePageComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(),
    StoreModule.forFeature('profileState', profileReducer),
    EffectsModule.forRoot([ProfileEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  exports: [HeaderComponent, ToastMessageComponent]
})
export class CoreModule {}
