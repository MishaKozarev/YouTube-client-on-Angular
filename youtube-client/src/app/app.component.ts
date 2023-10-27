import { Component } from '@angular/core';

import { Item } from './model/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showFilterBlock: boolean = false;
  public itemResponse: Item[] = [];
  public onClickedShowFilerBlock(showFilterBlock: boolean): void {
    this.showFilterBlock = showFilterBlock;
  }
  public onClickedGetResponse(itemResponse: Item[]): void {
    this.itemResponse = itemResponse;
  }
}
