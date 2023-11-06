import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../models/search-item.model';
import { SearchResultService } from '../../services/search-result/search-result.service';
import { DetailsService } from '../../services/services/details.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent {
  @Input() public item!: Item;

  id = '';
  publishData = '';
  currentItem!: Item;
  currentItemId: string = '';

  constructor(
    public service: DetailsService,
    public serviceResult: SearchResultService,
    public router: Router
  ) {}
}
