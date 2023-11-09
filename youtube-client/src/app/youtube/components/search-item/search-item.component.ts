import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/youtube/models/search-item.model';

import { DetailsService } from '../../services/details/details.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() public item!: Item;
  public id = '';
  public routerLink = '';

  constructor(public service: DetailsService) {}

  ngOnInit() {
    this.id = this.item.id.videoId;
    this.routerLink = `details/${this.id}`;
  }

  public setVideoData() {
    this.service.setVideoInfo(this.id);
  }
}
