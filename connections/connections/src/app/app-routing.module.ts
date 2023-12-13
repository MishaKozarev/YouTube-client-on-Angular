import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from 'src/app/core/pages/profile-page/profile-page.component';

import { SigninPageComponent } from './auth/pages/signin-page/signin-page.component';
import { SignupPageComponent } from './auth/pages/signup-page/signup-page.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: 'signin',
    component: SigninPageComponent
  },
  {
    path: '',
    loadChildren: () =>
      import('./connect/connect.module').then((m) => m.ConnectModule)
  },
  {
    path: 'profile',
    component: ProfilePageComponent
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
