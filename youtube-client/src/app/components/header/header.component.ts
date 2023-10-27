import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isShow?: boolean;
  @Output() public clickChange: EventEmitter<boolean> = new EventEmitter();
  showFilterBlock() {
    this.isShow = !this.isShow;
    this.clickChange.emit(this.isShow);
  }
}
