import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { SortDatePipe } from '../shared/pipes/sort-date/sort-date.pipe';
import { SortViewPipe } from '../shared/pipes/sort-view/sort-view.pipe';
import { SortWordPipe } from '../shared/pipes/sort-word/sort-word.pipe';
import { SearchResultsComponent } from './components/search-result/search-results.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SortDatePipe,
    SortViewPipe,
    SortWordPipe,
    MainPageComponent,
    DetailPageComponent
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule]
})
export class YoutubeModule {}
