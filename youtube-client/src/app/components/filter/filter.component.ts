import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchResultService } from 'src/app/youtube/services/search-result/search-result.service';
import { SortService } from 'src/app/youtube/services/sort/sort.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(
    public resultsService: SearchResultService,
    public sortService: SortService,
  ) {};

  public isShow: boolean = this.resultsService.showFilterBlock;


  getFilterInputValue(value: string): void {
  }

  handleSortByDate(event: Event) {
    this.sortService.sortByDate(event);
    console.log(this.isShow)
  }
  handleSortByView(event: Event) {
    this.sortService.sortByView(event);
    console.log("sortByView")

  }
}
