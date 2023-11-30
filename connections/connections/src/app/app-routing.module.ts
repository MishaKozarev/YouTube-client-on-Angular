import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '@pages/main-page/main-page.component';

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
    path: '**',
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
