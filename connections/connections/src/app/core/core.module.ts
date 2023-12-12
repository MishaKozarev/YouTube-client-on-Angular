import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { GroupEffect } from '../store/effects/group.effect';
import { PeopleEffect } from '../store/effects/people.effect';
import { ProfileEffects } from '../store/effects/profile.effect';
import { groupReducer } from '../store/reducers/group.reducer';
import { peopleReducer } from '../store/reducers/people.reducer';
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
    StoreModule.forFeature('groupState', groupReducer),
    StoreModule.forFeature('peopleState', peopleReducer),
    EffectsModule.forRoot([ProfileEffects, GroupEffect, PeopleEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  exports: [HeaderComponent, ToastMessageComponent]
})
export class CoreModule {}
