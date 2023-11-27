import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { deleteFavoriteCard } from '../../../store/actions/favorite-card.actions';
import { Item } from '../../../youtube/models/search-item.model';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent {
  @Input() public item!: Item;
  constructor(
    private router: Router,
    private store: Store
  ) {}

  public deleteCardOnFavoritePage(id: string): void {
    this.store.dispatch(
      deleteFavoriteCard({
        id
      })
    );
    this.router.navigate(['/youtube']);
  }
  public routingOnDetailPage(id: unknown): void {
    this.router.navigate(['/youtube', id]);
  }
}
