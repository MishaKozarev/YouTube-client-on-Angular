import { Component, Input } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() public itemCard?: Item;
  public publishAt!: string;
}
