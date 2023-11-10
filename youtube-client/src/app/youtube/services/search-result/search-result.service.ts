import { Injectable } from '@angular/core';
import { dataResponse } from 'src/app/youtube/constants/mock-response';

import { Item } from '../../models/search-item.model';
import { SearchResponse } from '../../models/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {
  private mockResponseService: SearchResponse = dataResponse;
  private mockItems: Item[] = this.mockResponseService.items;
  public showFilterBlock: boolean = false;
  public showSearchResult: boolean = false;

  getMockItems() {
    return this.mockItems;
  }

  getIsShow() {
    this.showFilterBlock = !this.showFilterBlock;
  }

  getIsShowSearchResultBlock(event: Event) {
    event.preventDefault();
    this.showSearchResult = true;
  }
  getItemById(id: string) {
    return this.mockItems.find((item) => item.id === id);
  }
}
