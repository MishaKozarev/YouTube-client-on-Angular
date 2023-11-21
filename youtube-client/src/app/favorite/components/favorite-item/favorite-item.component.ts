import { Component, Input } from '@angular/core';
import { Item } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent {
  @Input() public item!: Item;

}
