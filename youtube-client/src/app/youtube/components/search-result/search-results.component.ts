import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/youtube/models/search-item.model';

import { SearchResultService } from '../../services/search-result/search-result.service';
import { SortService } from '../../services/sort/sort.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public items: Item[] = [];

  constructor(
    public resultsService: SearchResultService,
    public sortService: SortService
  ) {}

  ngOnInit(): void {
    this.items = this.resultsService.getMockItems();
  }
}
