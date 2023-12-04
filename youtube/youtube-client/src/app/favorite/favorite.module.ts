import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { FavoriteResultComponent } from './components/favorite-result/favorite-result.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';

@NgModule({
  declarations: [FavoritePageComponent, FavoriteResultComponent],
  imports: [FavoriteRoutingModule, SharedModule]
})
export class FavoriteModule {}
