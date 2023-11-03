import { Component } from '@angular/core';

import { Item } from './youtube/models/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showFilterBlock: boolean = false;
  public itemResponse: Item[] = [];

  public ascendDate: boolean = true;
  public isSortDate: boolean = false;

  public ascendView: boolean = true;
  public isSortView: boolean = false;

  public filterInputValue: string = '';

  public onClickedShowFilerBlock(showFilterBlock: boolean): void {
    this.showFilterBlock = showFilterBlock;
  }
  public onClickedGetResponse(itemResponse: Item[]): void {
    this.itemResponse = itemResponse;
  }

  public onClickedSortDate(): void {
    this.isSortDate = true;
    this.isSortView = false;
    this.ascendDate = !this.ascendDate;
  }
  public onClickedSortView(): void {
    this.isSortView = true;
    this.isSortDate = false;
    this.ascendView = !this.ascendView;
  }
  public onClickedSortWord(value: string): void {
    this.filterInputValue = value;
  }
}
