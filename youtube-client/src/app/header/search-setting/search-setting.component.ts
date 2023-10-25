import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-setting',
  templateUrl: './search-setting.component.html',
  styleUrls: ['./search-setting.component.scss']
})
export class SearchSettingComponent {
  public isShow?: boolean;
  @Output() public clickChange: EventEmitter<boolean> = new EventEmitter();
  toggleDisplay() {
    this.isShow = !this.isShow;
    this.clickChange.emit(this.isShow);
  }
}
