import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { GroupEffect } from '../store/effects/group.effect';
import { GroupMessageEffect } from '../store/effects/group-message.effect';
import { PeopleEffect } from '../store/effects/people.effect';
import { PeopleConversationEffect } from '../store/effects/people-conversation.effect';
import { PeopleMessageEffect } from '../store/effects/people-message.effect';
import { ProfileEffects } from '../store/effects/profile.effect';
import { groupReducer } from '../store/reducers/group.reducer';
import { groupMessageReducer } from '../store/reducers/group-message.reducers';
import { peopleReducer } from '../store/reducers/people.reducer';
import { peopleConversationReducer } from '../store/reducers/people-conversation.reducer';
import { peopleMessageReducer } from '../store/reducers/people-message.reducers';
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
    RouterModule,
    StoreModule.forRoot(),
    StoreModule.forFeature('profileState', profileReducer),
    StoreModule.forFeature('groupState', groupReducer),
    StoreModule.forFeature('groupMessageState', groupMessageReducer),
    StoreModule.forFeature('peopleState', peopleReducer),
    StoreModule.forFeature('peopleMessageState', peopleMessageReducer),
    StoreModule.forFeature(
      'peopleConversationState',
      peopleConversationReducer
    ),
    EffectsModule.forRoot([
      ProfileEffects,
      GroupEffect,
      PeopleEffect,
      PeopleConversationEffect,
      GroupMessageEffect,
      PeopleMessageEffect
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  exports: [HeaderComponent, ToastMessageComponent]
})
export class CoreModule {}
