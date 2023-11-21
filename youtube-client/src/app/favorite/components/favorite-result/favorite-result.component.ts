import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/youtube/models/search-item.model';
import { SortService } from 'src/app/youtube/services/sort/sort.service';

@Component({
  selector: 'app-favorite-result',
  templateUrl: './favorite-result.component.html',
  styleUrls: ['./favorite-result.component.scss']
})
export class FavoriteResultComponent implements OnInit{
  public favoriteItems: Item[] = [];
  constructor(public sortService: SortService) {}
  ngOnInit(): void {}
}
