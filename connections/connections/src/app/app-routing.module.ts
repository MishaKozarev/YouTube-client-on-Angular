import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationPageComponent } from 'src/app/connect/pages/conversation-page/conversation-page.component';
import { GroupPageComponent } from 'src/app/connect/pages/group-page/group-page.component';
import { MainPageComponent } from 'src/app/connect/pages/main-page/main-page.component';
import { ProfilePageComponent } from 'src/app/core/pages/profile-page/profile-page.component';

import { SigninPageComponent } from './auth/pages/signin-page/signin-page.component';
import { SignupPageComponent } from './auth/pages/signup-page/signup-page.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: 'signin',
    component: SigninPageComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent
  },
  {
    path: 'group',
    component: GroupPageComponent
  },
  {
    path: 'conversation',
    component: ConversationPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
