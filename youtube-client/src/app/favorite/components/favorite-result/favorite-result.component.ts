import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFavoriteCardItems } from 'src/app/store/selectors/favorite-card.selectors';
import { Item } from 'src/app/youtube/models/search-item.model';
import { SortService } from 'src/app/youtube/services/sort/sort.service';

@Component({
  selector: 'app-favorite-result',
  templateUrl: './favorite-result.component.html',
  styleUrls: ['./favorite-result.component.scss']
})
export class FavoriteResultComponent {
  public favoriteItems$: Observable<Item[]> = this.store.select(
    selectFavoriteCardItems
  );
  constructor(
    public sortService: SortService,
    private readonly store: Store
  ) {}
}
