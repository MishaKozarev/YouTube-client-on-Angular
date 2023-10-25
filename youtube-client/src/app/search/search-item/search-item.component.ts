import { Component } from '@angular/core';
import { SearchResponse } from 'src/app/model/search-response.model';

import { dataResponse } from '../../mock-response';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  data: SearchResponse = dataResponse;
  title = this.data.items[0]?.snippet.title;
}
