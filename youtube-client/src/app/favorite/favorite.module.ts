import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';
import { FavoriteResultComponent } from './components/favorite-result/favorite-result.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';

@NgModule({
  declarations: [
    FavoritePageComponent,
    FavoriteResultComponent,
    FavoriteItemComponent
  ],
  imports: [FavoriteRoutingModule, SharedModule]
})
export class FavoriteModule {}
