import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { SearchResultsComponent } from './youtube/components/search-result/search-results.component';
import { YoutubeModule } from './youtube/youtube.module';


const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'youtube',
        component: SearchResultsComponent

    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
