import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/youtube/models/search-item.model';
import { SearchResultService } from 'src/app/youtube/services/search-result/search-result.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private resultsService: SearchResultService) {}
  items?: Item[];
  public isShow: boolean = this.resultsService.showFilterBlock;
  public search: string = '';

  @Output() public clickShowItems: EventEmitter<Item[]> = new EventEmitter();

  handleShowResult(event: Event) {
    this.resultsService.getIsShowSearchResultBlock(event);
  }
  keyUpEnter(event: KeyboardEvent) {
    if (this.search.length > 0 && event.code === 'Enter') {
      this.resultsService.getIsShowSearchResultBlock(event);
    }
  }
}
