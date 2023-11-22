import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteCustomCard } from 'src/app/store/actions/custom-card.actions';
import { addFavoriteCard } from 'src/app/store/actions/favorite-card.actions';
import { selectFavoriteCardItems } from 'src/app/store/selectors/favorite-card.selectors';
import { Item } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() public item!: Item;
  public noPhoto = '../../../../assets/icon-no-photo.png';
  public favoriteCards$: Observable<Item[]> = this.store.select(
    selectFavoriteCardItems
  );
  public isCardOnFavorites = false;
  id!: string;
  link!: string;

  constructor(
    private router: Router,
    private store: Store
  ) {}
  ngOnInit(): void {
    this.favoriteCards$.subscribe((cards) => {
      this.isCardOnFavorites = !(
        cards.findIndex((card) => card.id.videoId === this.item.id.videoId) ===
        -1
      );
    });
    console.log(this.isCardOnFavorites);
  }

  public onOpenDetailedPageById(itemId: unknown): void {
    this.router.navigate(['/youtube', itemId]);
  }

  public addCardOnFavoritePage(): void {
    this.store.dispatch(
      addFavoriteCard({
        card: this.item
      })
    );
    this.router.navigate(['/favorite']);
  }

  public deleteCardOnFavoritePage(id: string): void {
    this.store.dispatch(
      deleteCustomCard({
        id
      })
    );
  }
}
