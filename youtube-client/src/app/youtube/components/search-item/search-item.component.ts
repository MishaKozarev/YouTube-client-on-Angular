import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteCustomCard } from 'src/app/store/actions/custom-card.actions';
import { addFavoriteCard } from 'src/app/store/actions/favorite-card.actions';
import { Item } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() public item!: Item;
  public noPhoto = '../../../../assets/icon-no-photo.png';

  constructor(
    private router: Router,
    private store: Store
  ) {}

  onOpenDetailedPageById(itemId: unknown) {
    this.router.navigate(['/youtube', itemId]);
  }

  public addCardOnFavoritePage() {
    this.store.dispatch(
      addFavoriteCard({
        card: this.item
      })
    );
    this.router.navigate(['/favorite']);
  }

  deleteCardOnFavoritePage(id: string) {
    this.store.dispatch(
      deleteCustomCard({
        id
      })
    );
  }
}
