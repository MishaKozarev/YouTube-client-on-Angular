import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConversationPageComponent } from './pages/conversation-page/conversation-page.component';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ProfilePageComponent,
    GroupPageComponent,
    ConversationPageComponent
  ],
  imports: [CommonModule]
})
export class ConnectModule {}
