import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { GroupListComponent } from './components/group-list/group-list.component';
import { ConversationPageComponent } from './pages/conversation-page/conversation-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    GroupListComponent,
    ConversationPageComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [MainPageComponent, GroupListComponent]
})
export class ConnectModule {}
