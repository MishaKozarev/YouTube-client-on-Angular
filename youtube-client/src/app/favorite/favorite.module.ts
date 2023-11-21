import { NgModule } from '@angular/core';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { FavoriteResultComponent } from './components/favorite-result/favorite-result.component';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';
import { SharedModule } from '@shared/shared.module';
import { FavoriteRoutingModule } from './favorite-routing.module';

@NgModule({
  declarations: [
    FavoritePageComponent,
    FavoriteResultComponent,
    FavoriteItemComponent
  ],
  imports: [
    FavoriteRoutingModule,
    SharedModule
  ],
})
export class FavoriteModule {}
