import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public show: boolean = false
  onClicked(show: boolean): void {
    this.show = show
  }
}
