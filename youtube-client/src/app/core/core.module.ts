import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';
import { FavoriteModule } from '../favorite/favorite.module';
import { customCardReducer } from '../store/reducers/custom-card.reducer';
import { favoriteCardReducer } from '../store/reducers/favorite-card.reducer';
import { paginationReducer } from '../store/reducers/pagination.reducer';
import { youtubeCardReducer } from '../store/reducers/youtube-card.reducer';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    FilterComponent,
    HeaderComponent,
    NotFoundComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FavoriteModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('customCardsState', customCardReducer),
    StoreModule.forFeature('youtubeCardsState', youtubeCardReducer),
    StoreModule.forFeature('favoriteCardsState', favoriteCardReducer),
    StoreModule.forFeature('pagination', paginationReducer)
  ],
  exports: [HeaderComponent]
})
export class CoreModule {}
