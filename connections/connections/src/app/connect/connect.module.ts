import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GroupEffect } from '../store/effects/group.effect';
import { groupReducer } from '../store/reducers/group.reducer';
import { GroupListComponent } from './components/group-list/group-list.component';
import { ConversationPageComponent } from './pages/conversation-page/conversation-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    GroupListComponent,
    ConversationPageComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('groupState', groupReducer),
    EffectsModule.forRoot([GroupEffect])
  ],
  exports: [MainPageComponent, GroupListComponent]
})
export class ConnectModule {}
