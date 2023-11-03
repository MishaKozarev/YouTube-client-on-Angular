import { Component } from '@angular/core';
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
    public sortService: SortService
  ) {}
  public isShow: boolean = this.resultsService.showFilterBlock;

  public addSortByDate(event: Event): void {
    this.sortService.sortByDate(event);
  }
  public addSortByView(event: Event): void {
    this.sortService.sortByView(event);
  }
}
