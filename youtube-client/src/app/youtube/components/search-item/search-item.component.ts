import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteCustomCard } from 'src/app/store/actions/custom-card.actions';
import {
  addFavoriteCard,
  deleteFavoriteCard
} from 'src/app/store/actions/favorite-card.actions';
import { selectFavoriteCardItems } from 'src/app/store/selectors/favorite-card.selectors';
import { Item } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  public noPhoto = '../../../../assets/icon-no-photo.png';
  public favoriteCards$: Observable<Item[]> = this.store.select(
    selectFavoriteCardItems
  );
  public isCardOnFavorites = false;
  @Input() public item!: Item;
  id!: string;
  link!: string;

  constructor(
    private router: Router,
    private store: Store
  ) {}
  ngOnInit(): void {
    this.id = this.item.id;
    this.link = `/youtube/${this.id}`;
    this.favoriteCards$.subscribe((cards) => {
      this.isCardOnFavorites = !(
        cards.findIndex((card) => card.id === this.item.id) === -1
      );
    });
  }

  public onOpenDetailedPageById(id: string): void {
    this.router.navigate([`youtube/${id}`]);
  }

  public addCardOnFavoritePage(): void {
    if (!this.isCardOnFavorites) {
      this.store.dispatch(
        addFavoriteCard({
          card: this.item
        })
      );
    }
  }

  public deleteCustomCardCardOnPage(id: string): void {
    this.store.dispatch(
      deleteCustomCard({
        id
      })
    );
  }
}
