import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ConversationComponent } from './components/conversation/conversation.component';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { ConnectRoutingModule } from './connect-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CompanionsColorPipe } from './pipes/companions-color.pipe';
import { NameUserTransformPipe } from './pipes/name-user-transform.pipe';

@NgModule({
  declarations: [
    MainPageComponent,
    GroupListComponent,
    GroupDetailsComponent,
    PeopleListComponent,
    ConversationComponent,
    CompanionsColorPipe,
    NameUserTransformPipe
  ],
  imports: [CommonModule, ReactiveFormsModule, ConnectRoutingModule]
})
export class ConnectModule {}
