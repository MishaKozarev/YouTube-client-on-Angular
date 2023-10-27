import { Component, Input } from '@angular/core';
import { dataResponse } from 'src/app/constants/mock-response';
import { Item } from 'src/app/model/search-item.model';
import { SearchResponse } from 'src/app/model/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input() searchResponse?: SearchResponse = dataResponse;
  items?: Item[] = this.searchResponse?.items;
}
