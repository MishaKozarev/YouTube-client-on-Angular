import { Component } from '@angular/core';
import { SearchResultService } from 'src/app/youtube/services/search-result/search-result.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private resultsService: SearchResultService) {}
  public isShow: boolean = this.resultsService.showFilterBlock;
  public search: string = '';

  public handleShowResult(event: Event): void {
    this.resultsService.getIsShowSearchResultBlock(event);
  }
  public keyUpEnter(event: KeyboardEvent): void {
    if (this.search.length > 0 && event.code === 'Enter') {
      this.resultsService.getIsShowSearchResultBlock(event);
    }
  }
}
