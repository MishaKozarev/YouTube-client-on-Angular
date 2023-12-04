import { Component } from '@angular/core';
import { ShowFilterBlockService } from 'src/app/youtube/services/show-filter-block/show-filter-block.service';
import { SortService } from 'src/app/youtube/services/sort/sort.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(
    private showFilterBlockService: ShowFilterBlockService,
    public sortService: SortService
  ) {}
  public isShow: boolean = this.showFilterBlockService.showFilterBlock;

  public addSortByDate(event: Event): void {
    this.sortService.sortByDate(event);
  }
  public addSortByView(event: Event): void {
    this.sortService.sortByView(event);
  }
}
