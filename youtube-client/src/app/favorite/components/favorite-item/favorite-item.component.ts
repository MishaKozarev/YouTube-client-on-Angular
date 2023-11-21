import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteFavoriteCard } from 'src/app/store/actions/favorite-card.actions';
import { Item } from 'src/app/youtube/models/search-item.model';

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

  deleteCardOnFavoritePage(id: string) {
    this.store.dispatch(
      deleteFavoriteCard({
        id
      })
    );
    this.router.navigate(['/youtube']);
  }
}
