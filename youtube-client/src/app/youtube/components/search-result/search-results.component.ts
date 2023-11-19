import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

import { Item } from '../../models/search-item.model';
import { ResponseService } from '../../services/response/response.service';
import { SearchFormService } from '../../services/search-form/search-form.service';
import { SortService } from '../../services/sort/sort.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  public videos$: Observable<Item[]> = this.store.select(
    (state) => state.customCardsState.customCards
  );

  // public videos$ = this.searchFormService.videos$;

  constructor(
    public sortService: SortService,
    public responseService: ResponseService,
    private store: Store<AppState>
  ) {}
}
