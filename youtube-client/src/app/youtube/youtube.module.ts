import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CardIconComponent } from './components/card-icon/card-icon.component';
import { BorderColorDirective } from './components/directives/border-color.directive';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-result/search-results.component';
import { SortDatePipe } from './pipes/sort-date/sort-date.pipe';
import { SortViewPipe } from './pipes/sort-view/sort-view.pipe';
import { SortWordPipe } from './pipes/sort-word/sort-word.pipe';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    CardIconComponent,
    BorderColorDirective,
    SortDatePipe,
    SortViewPipe,
    SortWordPipe
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
    CardIconComponent,
    BorderColorDirective,
    SortDatePipe,
    SortViewPipe,
    SortWordPipe
  ]
})
export class YoutubeModule {}
