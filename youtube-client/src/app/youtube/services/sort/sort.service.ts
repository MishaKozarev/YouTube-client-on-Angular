import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  public ascendDate: boolean = true;
  public ascendView: boolean = true;
  public isSortDate: boolean = false;
  public isSortView: boolean = false;
  public filterValue: string = '';

  public sortByDate(event: Event): void {
    event.preventDefault();
    this.isSortDate = true;
    this.isSortView = false;
    this.ascendDate = !this.ascendDate;
  }

  public sortByView(event: Event): void {
    event.preventDefault();
    this.isSortView = true;
    this.isSortDate = false;
    this.ascendView = !this.ascendView;
  }
}
