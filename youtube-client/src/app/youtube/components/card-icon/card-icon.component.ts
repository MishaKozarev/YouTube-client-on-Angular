import { Component, Input, OnInit } from '@angular/core';
import { IconLinks } from 'src/app/youtube/constants/icon-link';
import { SearchCard } from 'src/app/youtube/models/search-cards.model';
import { Item } from 'src/app/youtube/models/search-item.model';

import { DetailsService } from '../../services/services/details.service';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss']
})
export class CardIconComponent implements OnInit {
  @Input() item!: Item;
  constructor(public service: DetailsService) {}
  imagesIcon: SearchCard[] = [];

  ngOnInit(): void {
    if (this.item) {
      this.imagesIcon = [
        {
          img: IconLinks.viewed,
          count: this.item.statistics.viewCount
        },
        {
          img: IconLinks.likeCount,
          count: this.item.statistics.likeCount
        },
        {
          img: IconLinks.dislikeCount,
          count: this.item.statistics.dislikeCount
        },
        {
          img: IconLinks.commentCount,
          count: this.item.statistics.commentCount
        }
      ];
    }
  }
}
