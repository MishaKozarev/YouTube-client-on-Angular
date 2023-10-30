import { Component, EventEmitter, Output } from '@angular/core';
import { dataResponse } from 'src/app/constants/mock-response';
import { Item } from 'src/app/model/search-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items?: Item[] = dataResponse?.items;
  public isShow?: boolean;
  public search: string = '';
  @Output() public clickIsShow: EventEmitter<boolean> = new EventEmitter();
  showFilterBlock() {
    this.isShow = !this.isShow;
    this.clickIsShow.emit(this.isShow);
  }

  @Output() public clickShowItems: EventEmitter<Item[]> = new EventEmitter();
  addSearchResponse() {
    if (this.search.length > 0) {
      this.clickShowItems.emit(this.items);
    }
  }
  keyUpEnter(event: KeyboardEvent) {
    if (this.search.length > 0 && event.code === 'Enter') {
      this.clickShowItems.emit(this.items);
    }
  }
}
