import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConversationPageComponent } from './pages/conversation-page/conversation-page.component';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    GroupPageComponent,
    ConversationPageComponent
  ],
  imports: [CommonModule]
})
export class ConnectModule {}
