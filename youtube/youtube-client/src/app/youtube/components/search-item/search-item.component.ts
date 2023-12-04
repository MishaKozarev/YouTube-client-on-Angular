<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { deleteCustomCard } from '../../../store/actions/custom-card/custom-card.actions';
import {
  addFavoriteCard,
  deleteFavoriteCard
} from '../../../store/actions/favorite-card/favorite-card.actions';
import { selectFavoriteCardItems } from '../../../store/selectors/favorite-card.selectors';
import { Item } from '../../../youtube/models/search-item.model';
=======
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/youtube/models/search-item.model';
>>>>>>> main

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
<<<<<<< HEAD
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
  public deleteCardOnFavoritePage(id: string): void {
    this.store.dispatch(
      deleteFavoriteCard({
        id
      })
    );
    this.router.navigate(['/youtube']);
=======
export class SearchItemComponent {
  @Input() public item!: Item;

  constructor(private router: Router) {}

  onOpenDetailedPageById(itemId: unknown) {
    this.router.navigate(['/youtube', itemId]);
>>>>>>> main
  }
}
