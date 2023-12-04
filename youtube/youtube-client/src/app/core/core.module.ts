import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';
import { FavoriteModule } from '../favorite/favorite.module';
import { YoutubeCardEffects } from '../store/effects/youtube-cards.effects';
import { customCardReducer } from '../store/reducers/custom-card.reducer';
import { favoriteCardReducer } from '../store/reducers/favorite-card.reducer';
import { paginationReducer } from '../store/reducers/pagination.reducer';
import { youtubeCardReducer } from '../store/reducers/youtube-card.reducer';
import { YoutubeInterceptorService } from '../youtube/interceptors/youtube.interceptor';
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
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true
        }
      }
    ),
    StoreModule.forFeature('customCardsState', customCardReducer),
    StoreModule.forFeature('youtubeCardsState', youtubeCardReducer),
    StoreModule.forFeature('favoriteCardsState', favoriteCardReducer),
    StoreModule.forFeature('paginationState', paginationReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([YoutubeCardEffects])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YoutubeInterceptorService,
      multi: true
    }
  ],
  exports: [HeaderComponent]
})
export class CoreModule {}