import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'group/:groupId',
    component: GroupDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule {}
