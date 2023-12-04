import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { NotAuthGuard } from './auth/guards/not-auth.guard';
import { AdminPageComponent } from './core/pages/admin-page/admin-page.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { FavoritePageComponent } from './favorite/pages/favorite-page/favorite-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NotAuthGuard]
  },
  {
    path: 'youtube',
    loadChildren: () =>
      import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminPageComponent
  },
  {
    path: 'favorite',
    component: FavoritePageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
