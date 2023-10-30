import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() public isShow?: boolean;
  @Output() eventSortDate: EventEmitter<void> = new EventEmitter();
  @Output() eventSortView: EventEmitter<void> = new EventEmitter();
  @Output() eventSortWord: EventEmitter<string> = new EventEmitter();
  sortByDate(): void {
    this.eventSortDate.emit();
  }
  sortByView(): void {
    this.eventSortView.emit();
  }
  getFilterInputValue(value: string): void {
    this.eventSortWord.emit(value);
  }
}
