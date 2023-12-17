import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'group/:groupID',
    component: GroupDetailsComponent
  },
  {
    path: 'conversation/:conversationID',
    component: PeopleDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule {}
