import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public show: boolean = false;
  onClicked(show: boolean): void {
    this.show = show;
  }
}
