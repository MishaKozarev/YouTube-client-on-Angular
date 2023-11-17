import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  // @Input() public item!: CustomCard;
  @Input() public item!: Item;

  constructor(private router: Router) {}

  onOpenDetailedPageById(itemId: unknown) {
    this.router.navigate(['/youtube', itemId]);
  }
}
