import { Component } from '@angular/core';
import { ResponseService } from '../../services/response/response.service';
import { SearchFormService } from '../../services/search-form/search-form.service';

import { SearchResultService } from '../../services/search-result/search-result.service';
import { SortService } from '../../services/sort/sort.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  public videos$ = this.searchFormService.videos$;

  constructor(
    public resultsService: SearchResultService,
    public sortService: SortService,
    private searchFormService: SearchFormService,
    public responseService: ResponseService,
  ) {}
}
