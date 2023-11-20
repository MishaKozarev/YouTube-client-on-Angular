import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectCustomCardsItems } from 'src/app/store/selectors/customCards.selectors';
import { selectYoutubeCardItems } from 'src/app/store/selectors/youtubeCards.selectors';

import { Item } from '../../models/search-item.model';
import { ResponseService } from '../../services/response/response.service';
import { SortService } from '../../services/sort/sort.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  unitedVideoItems$: Observable<Item[]> | null = null;

  constructor(
    public sortService: SortService,
    public responseService: ResponseService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    const customCardItems$ = this.store.select(selectCustomCardsItems);
    const youtubeCardItems$ = this.store.select(selectYoutubeCardItems);
    this.unitedVideoItems$ = combineLatest([
      customCardItems$,
      youtubeCardItems$
    ]).pipe(
      map(([customCardItems, youtubeCardItems]) => {
        return [...customCardItems, ...youtubeCardItems];
      })
    );
  }
}
