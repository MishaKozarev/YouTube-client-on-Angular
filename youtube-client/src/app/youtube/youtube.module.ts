import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CardIconComponent } from './components/card-icon/card-icon.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-result/search-results.component';
import { YoutubeInterceptorService } from './interceptors/youtube.interceptor';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SortDatePipe } from './pipes/sort-date/sort-date.pipe';
import { SortViewPipe } from './pipes/sort-view/sort-view.pipe';
import { SortWordPipe } from './pipes/sort-word/sort-word.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    CardIconComponent,
    SortDatePipe,
    SortViewPipe,
    SortWordPipe,
    MainPageComponent,
    DetailPageComponent
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule]
})
export class YoutubeModule {}
